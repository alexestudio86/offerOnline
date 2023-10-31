export function NavSecondary ( {elements} ) {
    return (
        <ul className="nav nav-justified bg-white d-flex align-items-center h-100">
            <li className="nav-item">
                <a className="nav-link active text-capitalize" aria-current="page" href="#">{elements.author}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-capitalize" href="#">{elements.creation}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-capitalize" href="#">{elements.labels[0]}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-capitalize" href="#">{elements.comments.length}</a>
            </li>
        </ul>
    )
}