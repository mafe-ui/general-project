export default {
    //监听localStorage变化
    dispatchEventStroage() {
        const signSetItem = localStorage.setItem
        localStorage.setItem = function(key, val) {
            let setEvent = new Event('setItemEvent')
            setEvent.key = key
            setEvent.newValue = val
            window.dispatchEvent(setEvent)
            signSetItem.apply(this, arguments)
        }

    },
    //监听sessionStorage变化  
    dispatchEventStroage_S() {
        const signSetItem = sessionStorage.setItem
        sessionStorage.setItem = function(key, val) {
            let setEvent = new Event('setItemEvent_s')
            setEvent.key = key
            setEvent.newValue = val
            window.dispatchEvent(setEvent)
            signSetItem.apply(this, arguments)
        }

    }
} 