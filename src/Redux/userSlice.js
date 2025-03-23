import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification  } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = createAsyncThunk('user/login', async({email, password}) => {
    try {
        const auth = getAuth() // Checking for permission from Firebase
        const userCredential = await signInWithEmailAndPassword(auth, email, password) // Receives user information from Firebase (email and password).
        
        const user = userCredential.user // The user contains a lot of data (email, password, username, accessToken, etc.)
        const token = user.stsTokenManager.accessToken

        const getUser = doc(db, 'users', email)
        const userDocSnap = await getDoc(getUser)

        let username = ""
        if (userDocSnap.exists()) {
            username = userDocSnap.data().username
        }

        const userData = {
            token,
            user: user,
            username
        }

        await AsyncStorage.setItem("userToken", token) // Saving user login action to phone cache

        return userData
    } catch (error) {
        console.log("userSlice.js, line 19: ", error)
        throw error
    }
})

// Signup
export const signup = createAsyncThunk('user/signup', async({email, password, username}) => {
    try {
        const auth = getAuth();  
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        const user = userCredential.user;
        const token = user.stsTokenManager.accessToken;

        //await sendEmailVerification(user) // Sendin email verification before register
        await AsyncStorage.setItem("userToken", token)

        await setDoc(doc(db, 'users', userCredential.user.email), {
            owner_uid: userCredential.user.uid,
            username: username,
            email: userCredential.user.email
        })

        return { token, username }
    } catch (error) {
        console.log("userSlice.js, line 41: ", error);
        throw error;
    }
});

// Detecting auto login
export const autoLogin = createAsyncThunk("user/autoLogin", async() => {
    try {
        const token = await AsyncStorage.getItem("userToken")

        if (!token) {
            return
        }

        const auth = getAuth()
        const user = await new Promise((resolve, reject) => {
            const checkUser = setInterval(() => {
                const currentUser = auth.currentUser;
                if (currentUser) {
                    clearInterval(checkUser);
                    resolve(currentUser);
                }
            }, 0);

            setTimeout(() => {
                clearInterval(checkUser);
                reject(new Error("No authenticated user"));
            }, 5000);
        });

        if (!user) {
            throw new Error("No authenticated user")
        }

        const getUser = doc(db, 'users', user.email)
        const userDocSnap = await getDoc(getUser)

        let username = ""
        if (userDocSnap.exists()) {
            username = userDocSnap.data().username
        }

        return { token, username }
    } catch (error) {
        throw error        
    }
})

// Signout
export const logout = createAsyncThunk('user/logout', async() => {
    try {
        const auth = getAuth()
        await signOut(auth)

        await AsyncStorage.removeItem("userToken")
        return null
    } catch (error) {
        throw error
    }
})

const initialState = {
    // Login & Signup page
    isAuth: false,
    token: null,
    user: null,
    username: null,
    error: null,

    // Other datas
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(login.pending, (state) => {
                state.isAuth = false
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isAuth = true
                state.user = action.payload.user
                state.token = action.payload.token
                state.username = action.payload.username
            })
            .addCase(login.rejected, (state, action) => {
                state.isAuth = false
                state.error = action.error.message
            })

            // Signup
            .addCase(signup.pending, (state) => {
                state.isAuth = false;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isAuth = true
                state.token = action.payload.token
                state.username = action.payload.username
            })
            .addCase(signup.rejected, (state) => {
                state.isAuth = false;
                state.error = "Invalid Email or Password";
            })

            // Auto login
            .addCase(autoLogin.pending, (state) => {
                state.isAuth = false
            })
            .addCase(autoLogin.fulfilled, (state, action) => {
                state.isAuth = true
                state.token = action.payload.token
                state.username = action.payload.username
            })
            .addCase(autoLogin.rejected, (state) => {
                state.isAuth = false
                state.token = null
            })

            // Logout
            .addCase(logout.pending, () => {
                return
            })
            .addCase(logout.fulfilled, (state) => {
                state.isAuth = false
                state.token = null
                state.error = null
                state.username = null
            })
            .addCase(logout.rejected, (state, action) => {
                state.isAuth = false
                state.error = action.payload
            })
    }
})

export const { setEmail, setPassword, setUsername } = userSlice.actions
export default userSlice.reducer;