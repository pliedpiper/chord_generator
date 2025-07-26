# Chord Generator Project

## Project Overview
This is a web-based chord generator application that creates chord progressions with adjustable randomness levels. It uses Tone.js for audio synthesis and supports MIDI export.

## Critical Rules - DO NOT VIOLATE

- **NEVER create mock data or simplified components** unless explicitly told to do so

- **NEVER replace existing complex components with simplified versions** - always fix the actual problem

- **ALWAYS work with the existing codebase** - do not create new simplified alternatives

- **ALWAYS find and fix the root cause** of issues instead of creating workarounds

- When debugging issues, focus on fixing the existing implementation, not replacing it

- When something doesn't work, debug and fix it - don't start over with a simple version

## Project Structure
- `index.html` - Main HTML file with UI structure
- `app.js` - Core application logic including chord generation, audio playback, and keyboard visualization
- `styles.css` - Dark theme styling for the application
- `test.html` - Unit test runner for browser-based testing
- `chord-tests.js` - Chord generation test suite
- `run-tests.js` - Node.js test runner

## Key Features
- Randomized chord progression generation with weighted probabilities
- Adjustable randomness level (0-100%)
- Visual piano keyboard with chord highlighting
- Audio playback using Tone.js
- MIDI export functionality
- Dark mode UI

## Commands
```bash
# Run tests in browser
# Open test.html in a web browser

# Run tests in Node.js
node run-tests.js
```

## Dependencies
- Tone.js (v14.7.77) - Audio synthesis
- @tonejs/midi (v2.0.28) - MIDI export functionality