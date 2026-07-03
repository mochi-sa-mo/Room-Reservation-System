// firebase.js
// CDN経由でFirebaseのコア機能とFirestore（データベース）機能を読み込む
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// 取得した合鍵（設定情報）
const firebaseConfig = {
  apiKey: "AIzaSyBTTcfPbyRYQvN60X_8AGu0s_BfXdhhAk4",
  authDomain: "room-reservation-system-cists.firebaseapp.com",
  projectId: "room-reservation-system-cists",
  storageBucket: "room-reservation-system-cists.firebasestorage.app",
  messagingSenderId: "79407752626",
  appId: "1:79407752626:web:4fae089f7a876d0e1c70ab"
};

// Firebaseの初期化とデータベース（db）の書き出し
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);