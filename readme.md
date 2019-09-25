# Hook 跟 Class 狀態比較


## 實驗流程:
1. 點下add 點到2後 點下alert 再點add兩次 觀察alert結果

## 實作目標:

1. 使用class component 實作出:
- alert count 值跟最新顯示的值相同
- alert count 值跟最新顯示的值不同 而是按下alert當下顯示的count值


2. 使用hook 實作出:
- alert count 值跟最新顯示的值相同
- alert count 值跟最新顯示的值不同 而是按下alert當下顯示的count值


## 實作說明:


hook 在每次執行時 都會記住當下的狀態(count值) 成為一個closure
因此點了add 再點alert時 
這時候的alert已記住了當下count值 所以儘管後續再繼續更新count
最後還是會顯示舊的值


class component執行時 指向的是count的參考位置
因此後續alert顯示的值 將會是最新的count值


由於關鍵在於對應到ref或是value

因此class component可以在呼叫alert時 
利用closure的方式 記住當時的狀態 就可以達到與最新狀態不同的效果

hook 則是反過來 若要能夠一直拿到最新的值
則是需要使用ref 以達到指向最新數值的目的 因此可以使用useRef來達成

```javascript
  const countRef = useRef(count); //記住了count的ref
  countRef.current = count; //設定這個ref對應的值
```


## 參考文件
https://github.com/facebook/react/issues/14010