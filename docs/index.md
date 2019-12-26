# How it works
First choose a learning mode (toggle with A or B):
- "P": Play the tones as recorded
- "M": Play 20 of the recorded tones in a Monte Carlo kindof simulation. The tones as randomly played by recorded frequency. For example, if C is played 3 times and D is played 6 times during recording session. The probability of C being played is 1/3.
- "B": Play 20 of the recorder tones in a Baysiean kindof simulation. The tones are randomly played, but depend on the frequency of recordings after the previous tone. For example, if the recording is C-D-E-F-G-G-E then the probability of G beeing played after F is 100%, but after G there is a probability of G or E beeing played of 50 % each. 

Press A+B to select a learning mode.

o Record some tones.
Keys:
- A: Tone C
- P0: Tone D
- P1: Tone E
- P2: Tone F
- P3: Tone G
- B: Tone A

Press A+B to stop recording and start playing the record depending on the chosen learning mode.
