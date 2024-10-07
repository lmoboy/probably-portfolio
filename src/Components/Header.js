export default function Header({ children, className }) {
    return (
        <div className={`CoolHeader ` + className}>
            {children}
        </div>
    );
}