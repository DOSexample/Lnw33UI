
lnw33.socket.SEND = function( id, data )
{
    lnw33.socket.send( 
        JSON.stringify( { 
            id: id,
            token: lnw33.token,
            data: data
        })
    );
}

lnw33.socket.RESET = function(user_id, email) {
    if( typeof user_id === "number" )
        lnw33.user_id = user_id;
    if( typeof email ==="string" )
        lnw33.email = email;
    lnw33.token = "";
}

