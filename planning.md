# Chord Generator App – Coding Plan

## 1. Project Setup ✓
- **Folder structure**  
  - `index.html`  
  - `styles.css`  
  - `app.js`  
  - `test.html` - Unit test runner
  - `chord-tests.js` - Test suite
  - `run-tests.js` - Node.js test runner
  - `CLAUDE.md` - Project instructions
- **Dependencies**  
  - Tone.js v14.7.77 for audio synthesis
  - @tonejs/midi v2.0.28 for MIDI export

## 2. UI Design (HTML & CSS) ✓
- **Layout**  
  - Header with app title  
  - Form controls:  
    - Dropdown for all 12 keys  
    - Radio buttons for Major/Minor  
    - Number input for chord count (1-16)  
    - Randomness slider (0-100%)
    - "Generate" button  
    - "Random Everything" button
  - Playback & export controls:  
    - "Play/Stop" toggle button  
    - "Export MIDI" button
    - Arpeggio toggle checkbox
    - Arpeggio type dropdown (appears when toggled)
- **Styling**  
  - Dark theme design
  - Responsive layout
  - Visual feedback for playing chords
  - Styled controls with hover states

## 3. Core Logic (JavaScript) ✓
1. **Data Structures**  
   - All 12 notes array
   - Major/Minor scale patterns
   - Chord types with intervals
   - Common progressions library
   - Weighted transition matrices
2. **Generate Chords**  
   - Read user inputs (key, mode, count, randomness)
   - Build scale using patterns
   - Use weighted random selection based on music theory
   - Prevent immediate chord repetition
   - Support for common progressions at low randomness
   - Smart first/last chord selection
3. **Render UI Feedback**  
   - Display chord degrees in sequence
   - Visual highlighting during playback
   - Interactive piano keyboard visualization

## 4. Audio Playback ✓
- **Initialize Tone.js**  
  - PolySynth with triangle wave
  - Configured ADSR envelope
  - Auto-start on user interaction
- **Playback Features**
  - Sequential chord playback
  - Stop/resume functionality
  - Arpeggio mode with 6 patterns:
    - Up (low to high)
    - Down (high to low)
    - Up-Down (ascending then descending)
    - Down-Up (descending then ascending)
    - Random (randomized order)
    - Chord Tone (root-fifth-third-octave)
  - Continuous looping when arpeggio enabled
  - No pause between chords in arpeggio mode
  - Visual keyboard highlighting

## 5. MIDI Export ✓
- **MIDI Construction**  
  - Uses @tonejs/midi library
  - Converts chord progression to MIDI
  - 120 BPM tempo
  - Half note duration per chord
- **Download Feature**  
  - Automatic download as 'chord-progression.mid'
  - Blob-based file generation

## 6. Advanced Features ✓
- **Randomness Control**
  - Adjustable slider (0-100%)
  - Affects chord selection probability
  - Influences starting chord choice
  - Controls ending resolution tendency
- **Random Everything**
  - Randomizes all parameters at once
  - Weighted selections:
    - Chord count weighted toward 4
    - Randomness with bell curve distribution
    - Equal major/minor probability
- **Arpeggio System**
  - Toggle-based activation
  - Multiple pattern options
  - Dynamic timing adjustment
  - Seamless looping capability

## 7. Testing & Refinement ✓
- **Unit Tests**  
  - Scale generation tests for all keys
  - Chord note validation
  - Scale pattern interval verification
  - Edge case handling (wrapping, sharps)
  - Browser-based test runner (test.html)
  - Node.js test runner support
- **Functionality Tests**  
  - All keys, modes, chord counts verified
  - Audio playback timing tested
  - MIDI export functionality confirmed
  - Arpeggio patterns validated
  - Looping behavior tested
- **UX Improvements**  
  - Play/Export disabled until progression generated
  - Visual feedback during playback
  - Responsive design for mobile
  - Dark theme for reduced eye strain

## 8. Architecture Highlights
- **No-repeat Logic**: Prevents consecutive identical chords
- **Weighted Transitions**: Music theory-based probability
- **Dynamic UI**: Show/hide controls based on state
- **Modular Functions**: Clean separation of concerns
- **Error Handling**: Graceful audio context management

## 9. Future Enhancement Ideas
- Save/load progressions
- More chord types (7ths, 9ths, sus)
- Tempo control
- Volume control
- Chord inversions
- Custom progression templates
- MIDI import functionality

## 10. Session Handoff Note (2025-07-26)

### Recent Major Additions
This session focused on expanding the chord generator with comprehensive rhythm section features:

1. **Sound Selection (10 Synthesizer Options)**
   - Added dropdown to select from 10 different synthesizer sounds
   - Options: Triangle (default), Sine, Square, Sawtooth, FM Sine, AM Sine, Fat Sawtooth, Fat Square, Fat Triangle, Pulse
   - Each sound has custom oscillator and envelope settings
   - Updates in real-time without stopping playback

2. **Bass Line Generator**
   - Added complete bass section with 5 patterns:
     - Root Notes Only
     - Root & Fifth
     - Walking Bass (scale movement)
     - Arpeggiated (chord tones)
     - Pedal Tone (sustained root)
   - Selectable octave (2, 3, or 4)
   - Visual display of bass notes
   - Independent playback or synchronized with chords
   - "Play Together" feature for chord+bass playback

3. **Drum Pattern Generator**
   - 8 drum styles: Basic Beat, Rock, Jazz, Latin, Funk, Electronic, Shuffle, Half Time
   - 3 complexity levels: Simple, Medium, Complex
   - Probability-based random generation maintaining style characteristics
   - 4-track drum kit: Kick, Snare, Hi-Hat, Open Hi-Hat
   - Visual grid display with beat numbers
   - **Interactive editing**: Click grid cells to add/remove drum hits
   - Audio feedback when toggling hits
   - Clear pattern button
   - Visual feedback during playback (blue highlight on current beat)

4. **Audio Visualization**
   - Real-time waveform visualization in background
   - Multi-colored sine waves (blue, green, red) with offsets
   - Fade effect for motion trails
   - Connected to all audio sources (chords, bass, drums)
   - Automatic start/stop with playback

5. **Enhanced Random Everything Button**
   - Now randomizes ALL parameters:
     - Key, mode, chord count (limited to 4, 8, 12, 16)
     - Chord types, randomness level
     - Sound selection
     - Arpeggio settings (30% chance)
     - Bass pattern and octave (70% enabled)
     - Drum pattern and complexity (60% enabled)
   - Automatically generates bass and drums after chords

### Technical Implementation Details
- **Tone.js Integration**: All synths connected through central analyser for visualization
- **Event-driven Architecture**: Click handlers for drum grid interaction
- **Visual States**: CSS classes for hover, active, accent, and playing states
- **Performance**: RequestAnimationFrame for smooth 60fps visualization
- **Modular Design**: Separate functions for each instrument type

### Current State
- All features fully functional and tested
- Interactive drum pattern editor working with immediate audio feedback
- Visualization responds to all audio sources
- Random Everything creates complete musical arrangements
- No known bugs or issues

### Next Steps for Future Sessions
- Consider adding:
  - Preset save/load functionality
  - BPM/tempo control
  - Individual volume controls for each instrument
  - More drum sounds/variations
  - Pattern length options (8/16/32 beats)
  - Swing/groove settings
  - Recording/export of full arrangement
