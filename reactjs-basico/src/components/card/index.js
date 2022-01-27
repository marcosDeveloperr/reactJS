const Card = () => {
    return (
        <>
            <h1>Card</h1>
            <div className="card">
                <div className="card-header">
                    My first card
                </div>
                <div className="card-body">
                    <p>Card - Body text.</p>
                    <button type="button" class="btn btn-primary">Add</button>
                    <button type="button" class="btn btn-danger">Remove</button>
                    <p>0</p>
                </div>
            </div>        
        </>    
    )
}

export default Card;