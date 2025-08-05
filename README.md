# Chord Generator

A web-based chord progression generator with adjustable randomness, visual piano keyboard, and MIDI export capabilities.

## Features

- **Dynamic Chord Progression Generation** - Create chord progressions with weighted probabilities based on music theory
- **Adjustable Randomness** - Control the unpredictability of progressions from 0% (theory-based) to 100% (fully random)
- **Interactive Piano Visualization** - See generated chords highlighted on a virtual piano keyboard
- **Audio Playback** - Listen to progressions with built-in synthesizer using Tone.js
- **MIDI Export** - Export progressions as MIDI files with separate tracks for chords, bass, and drums
- **Dark Mode UI** - Easy-on-the-eyes interface for extended use

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/chord_generator.git
cd chord_generator
```

2. Open `index.html` in a modern web browser (Chrome, Firefox, Safari, or Edge recommended)

No build process or package installation required - all dependencies are loaded via CDN.

## Usage

1. **Generate Chords**: Click "Generate Chords" to create a new 8-bar progression
2. **Adjust Randomness**: Use the slider to control how unpredictable the progressions are:
   - 0% = Theory-based progressions following common patterns
   - 100% = Completely random chord selection
3. **Playback Controls**:
   - Play/Stop button to control audio playback
   - Visual feedback on the piano keyboard shows current chord
4. **Export**: Click "Export MIDI" to download the progression as a MIDI file

## Project Structure

```
chord_generator/
├── index.html          # Main application HTML
├── app.js             # Core application logic
├── styles.css         # Dark theme styling
├── test.html          # Browser-based test runner
├── chord-tests.js     # Chord generation test suite
├── run-tests.js       # Node.js test runner
└── CLAUDE.md          # Development guidelines
```

## Testing

### Browser Testing
Open `test.html` in a web browser to run the test suite with visual feedback.

### Node.js Testing
```bash
node run-tests.js
```

## Technologies Used

- **Tone.js** (v14.7.77) - Web audio synthesis and sequencing
- **@tonejs/midi** (v2.0.28) - MIDI file generation
- **Vanilla JavaScript** - No framework dependencies
- **HTML5/CSS3** - Modern web standards

## Browser Compatibility

- Chrome 66+
- Firefox 60+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Tone.js team for the excellent web audio library
- Music theory concepts adapted from classical harmony principles