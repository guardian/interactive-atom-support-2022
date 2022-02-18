// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"


const checkApp = () => {
    // check the parent window to see if this atom is embedded in an app
    const parentIsIos = window.parent.document.querySelector(".ios") // null if not present
    const parentIsAndroid = window.parent.document.querySelector(".android")

    // if it is in an app, add the 'in-app' class name to the body
    if (parentIsIos || parentIsAndroid) {
        document.querySelector(".support-atom-wrapper").classList.add("in-app")
    }
    else {
        // THIS FUNCTION CHECKS IF A USER IS A SUBSCRIBER AND HIDES THE THRASHER. 
        // UPDATE THE CONTAINER NAME ON LINES 21 & 23
        function getCookieValue(name) {
            var val = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
            return val ? val.pop() : undefined;
        }
        function shouldHideSupportMessaging() {
            return getCookieValue('gu_hide_support_messaging') === 'true';
        }
        if (shouldHideSupportMessaging()) {
            document.getElementById("#support-atom-wrapper").classList.add = "is-supporter";
        } else {
            document.getElementById("#support-atom-wrapper").classList.remove = "is-supporter";
        }
    }
}

if (document.readyState === 'loading') { // Loading hasn't finished yet
  document.addEventListener('DOMContentLoaded', checkApp);
} else { // `DOMContentLoaded` has already fired
  checkApp()
}


// setTimeout(() => {
//     checkApp()
// }, 10000)





