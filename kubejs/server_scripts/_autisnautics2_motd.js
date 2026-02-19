PlayerEvents.loggedIn(event => {
    event.player.tell(["Welcome to ", Text.purple("the NAN Pack"), " on 1.20"]);
    event.player.tell(["Now get out."]);
})
