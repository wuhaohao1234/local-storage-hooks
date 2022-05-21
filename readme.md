## local-storage-hooks

```jsx
import { useState } from "react"

/**
 * const [state, setState] = useLocalStorageHooks('item', 0)
 * state => 0
 * setState(state ++)
 * state => 1
 * */ 


const useLocalStorageHooks = (key: string, defaultValue: string): any[] => {

  const [state, setState] = useState(defaultValue)
  const callback = (newValue: string) => {
    localStorage.setItem(key, newValue)
    setState(newValue)
  }
  

  if (localStorage.getItem(key)) {
    return [localStorage.getItem(key) || '', callback]
  }
  localStorage.setItem(key, defaultValue)
  return [state, callback]
}

export default useLocalStorageHooks
```