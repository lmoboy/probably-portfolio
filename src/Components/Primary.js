export default function Primary({ children, className }) {  
    return (
        <div className={`Primary ` + className}>
            {children}
        </div>
    );
}