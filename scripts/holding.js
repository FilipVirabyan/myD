console.log('rfrf')
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCAB9saDPEPO9IjCgDA-P_2DCaCwpAjMYg",
    authDomain: "my-d-9d702.firebaseapp.com",
    projectId: "my-d-9d702",
    storageBucket: "my-d-9d702.appspot.com",
    messagingSenderId: "473157913654",
    appId: "1:473157913654:web:ed4500e3d43783cc501c97",
    measurementId: "G-CSXLD74DT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function isTouchOnLeftSide(touch) {
    const screenWidth = window.innerWidth;
    return touch.clientX < screenWidth / 2; // Only consider touches on the left side
}

// Function to handle touch events
function handleTouchEvent(event) {
    console.log(event);
    // Prevent default behavior (e.g., scrolling) for better touch handling
    event.preventDefault();

    // Get all active touch points
    const touches = event.touches;

    // Array to store touch points on the left side
    let leftSideTouches = [];

    // Loop through each touch point
    for (let i = 0; i < touches.length; i++) {
        const touch = touches[i];

        // Check if touch is on the left side
        if (isTouchOnLeftSide(touch)) {
            leftSideTouches.push(touch);
        }

        // Stop collecting if we already have 4 touch points
        if (leftSideTouches.length === 4) {
            break;
        }
    }

    // Log or handle the 4 touch points on the left side
    console.log('Left side touches:', leftSideTouches);

    // If we have 4 touches on the left side, do something (e.g., trigger an action)
    if (leftSideTouches.length === 4) {
        console.log("Four touches detected on the left side of the screen.");
        // You can add additional logic here for what happens when four touches are detected
    }
}

// Add event listeners for touchstart and touchmove
document.addEventListener('touchstart', handleTouchEvent);
document.addEventListener('touchmove', handleTouchEvent);