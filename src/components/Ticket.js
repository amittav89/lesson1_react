export default function Ticket({ticket }) {
    return (
            <div className= "container">
                <h1>Ticket id  :{ticket.id}</h1>
                <p>Firstname : {ticket.fname} </p>
                <p>LastName : {ticket.lname} </p>
            </div>

    )
}