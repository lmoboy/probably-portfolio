export default function Card({ children, className }) {
    return (
        <div className={`card flex hover:scale-105 transition-all ` + className}>
            {children}
        </div>
    );
}