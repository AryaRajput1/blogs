function Button({ children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props }) {
    return (
        <button {...props}>{children}</button>
    )
}

export default Button