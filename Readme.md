# Disclaimer

To use these components, you need `React Js` or `Next Js` configured with `Tailwind CSS`.

## Button

Props for the Button Component

1. `className` - optional.
   String value passed as `className` prop will be added to the inner button tag.
2. `onClick`
   To pass the function associated with the button.
3. `children`
   The children component or markup or text to be displayed as the button text.

```
<Button
    className = "bg-red-500
    custom-class"
    onClick= {()=>{console.log("hello world!")}}
>
Say Hello
</Button>
```

## Modal

Props for the Modal Component

1. `className` - optional.
   To customize the Modal's inner layout. By default the modal is flexbox and it aligns and justifies the children to center.
2. `show` and `setShow` Required.
   State variable and state handler to control the Modal's visibility.
   `show` should be `null` initially. `setShow` should set the `show` state to false or true based on whether you want to close or open the modal respectively.

```
const [show, setShow] = useState(null);
```

3. `btns` - optional.
   An array of objects. Each object should have three properties: `text`, `action`, `close`.

4. `children`.
   Pass in components or markup as the body of the modal.

- `text`: defines the text value displayed in the button tag.
- `action`: Function defining the event or action to perform on button click.

- `close`: Boolean value to define whether the button will close the modal on click or not.

```
const btns = [
    {
        text: 'Hello',
        action: ()=>{console.log('hello')},
        close: true,
    },
    {
        text: 'Hello',
        action: ()=>{console.log('hello')},
        close: true,
    },
]
```

By default, you have a button for closing the modal. The objects in the above array will create two more buttons in the modal.
