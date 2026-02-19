PlayerEvents.loggedIn(event => {
    event.player.tell(["Welcome to  ", Text.purple("mine craft"), "   !"]);
    event.player.tell(["Now get out."]);
})
