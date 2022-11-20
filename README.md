# Lab 8

1) You would put them "within a Github action that runs whenever code is pushed" because
we want to have all versions/changes to our code continuously tested so it is much easier to
identify whats causing any failed tests and you can easily revert to previous iterations 
without errors if there's major issues with a piece of code.

2) No.

3) No, because this would likely mean testing multiple functions that allow the person to
write the message and send it, meaning a unit test wouldn't be able to encapsulate all of 
that. Would be better suited for E2E test.

4) Yes, because this would probably involve one function that checks the length of the
inputted message and a unit test would be able to handle that, checking if it does actually
stop the user from further typing.