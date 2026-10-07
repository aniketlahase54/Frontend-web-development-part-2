function User(props){
    return(
        <div>
            <h1>user components</h1>
            <h1>{props.username}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>
        </div>
    )
}

export default User;