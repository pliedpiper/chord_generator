// Music theory data
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const MAJOR_SCALE_PATTERN = [0, 2, 4, 5, 7, 9, 11];
const MINOR_SCALE_PATTERN = [0, 2, 3, 5, 7, 8, 10];

// Chord types and their intervals
const CHORD_TYPES = {
    major: {
        triad: {
            'I': { intervals: [0, 4, 7], symbol: '' },
            'ii': { intervals: [2, 5, 9], symbol: 'm' },
            'iii': { intervals: [4, 7, 11], symbol: 'm' },
            'IV': { intervals: [5, 9, 0], symbol: '' },
            'V': { intervals: [7, 11, 2], symbol: '' },
            'vi': { intervals: [9, 0, 4], symbol: 'm' },
            'vii°': { intervals: [11, 2, 5], symbol: '°' }
        },
        '7th': {
            'I': { intervals: [0, 4, 7, 11], symbol: 'maj7' },
            'ii': { intervals: [2, 5, 9, 0], symbol: 'm7' },
            'iii': { intervals: [4, 7, 11, 2], symbol: 'm7' },
            'IV': { intervals: [5, 9, 0, 4], symbol: 'maj7' },
            'V': { intervals: [7, 11, 2, 5], symbol: '7' },
            'vi': { intervals: [9, 0, 4, 7], symbol: 'm7' },
            'vii°': { intervals: [11, 2, 5, 9], symbol: 'm7♭5' }
        },
        '9th': {
            'I': { intervals: [0, 4, 7, 11, 2], symbol: 'maj9' },
            'ii': { intervals: [2, 5, 9, 0, 4], symbol: 'm9' },
            'iii': { intervals: [4, 7, 11, 2, 5], symbol: 'm9' },
            'IV': { intervals: [5, 9, 0, 4, 7], symbol: 'maj9' },
            'V': { intervals: [7, 11, 2, 5, 9], symbol: '9' },
            'vi': { intervals: [9, 0, 4, 7, 11], symbol: 'm9' },
            'vii°': { intervals: [11, 2, 5, 9, 0], symbol: 'm9♭5' }
        },
        'sus2': {
            'I': { intervals: [0, 2, 7], symbol: 'sus2' },
            'ii': { intervals: [2, 4, 9], symbol: 'sus2' },
            'iii': { intervals: [4, 5, 11], symbol: 'sus2' },
            'IV': { intervals: [5, 7, 0], symbol: 'sus2' },
            'V': { intervals: [7, 9, 2], symbol: 'sus2' },
            'vi': { intervals: [9, 11, 4], symbol: 'sus2' },
            'vii°': { intervals: [11, 0, 5], symbol: 'sus2' }
        },
        'sus4': {
            'I': { intervals: [0, 5, 7], symbol: 'sus4' },
            'ii': { intervals: [2, 7, 9], symbol: 'sus4' },
            'iii': { intervals: [4, 9, 11], symbol: 'sus4' },
            'IV': { intervals: [5, 11, 0], symbol: 'sus4' },
            'V': { intervals: [7, 0, 2], symbol: 'sus4' },
            'vi': { intervals: [9, 2, 4], symbol: 'sus4' },
            'vii°': { intervals: [11, 4, 5], symbol: 'sus4' }
        }
    },
    minor: {
        triad: {
            'i': { intervals: [0, 3, 7], symbol: 'm' },
            'ii°': { intervals: [2, 5, 8], symbol: '°' },
            'III': { intervals: [3, 7, 10], symbol: '' },
            'iv': { intervals: [5, 8, 0], symbol: 'm' },
            'v': { intervals: [7, 10, 2], symbol: 'm' },
            'VI': { intervals: [8, 0, 3], symbol: '' },
            'VII': { intervals: [10, 2, 5], symbol: '' }
        },
        '7th': {
            'i': { intervals: [0, 3, 7, 10], symbol: 'm7' },
            'ii°': { intervals: [2, 5, 8, 0], symbol: 'm7♭5' },
            'III': { intervals: [3, 7, 10, 2], symbol: 'maj7' },
            'iv': { intervals: [5, 8, 0, 3], symbol: 'm7' },
            'v': { intervals: [7, 10, 2, 5], symbol: 'm7' },
            'VI': { intervals: [8, 0, 3, 7], symbol: 'maj7' },
            'VII': { intervals: [10, 2, 5, 8], symbol: '7' }
        },
        '9th': {
            'i': { intervals: [0, 3, 7, 10, 2], symbol: 'm9' },
            'ii°': { intervals: [2, 5, 8, 0, 3], symbol: 'm9♭5' },
            'III': { intervals: [3, 7, 10, 2, 5], symbol: 'maj9' },
            'iv': { intervals: [5, 8, 0, 3, 7], symbol: 'm9' },
            'v': { intervals: [7, 10, 2, 5, 8], symbol: 'm9' },
            'VI': { intervals: [8, 0, 3, 7, 10], symbol: 'maj9' },
            'VII': { intervals: [10, 2, 5, 8, 0], symbol: '9' }
        },
        'sus2': {
            'i': { intervals: [0, 2, 7], symbol: 'sus2' },
            'ii°': { intervals: [2, 3, 8], symbol: 'sus2' },
            'III': { intervals: [3, 5, 10], symbol: 'sus2' },
            'iv': { intervals: [5, 7, 0], symbol: 'sus2' },
            'v': { intervals: [7, 8, 2], symbol: 'sus2' },
            'VI': { intervals: [8, 10, 3], symbol: 'sus2' },
            'VII': { intervals: [10, 0, 5], symbol: 'sus2' }
        },
        'sus4': {
            'i': { intervals: [0, 5, 7], symbol: 'sus4' },
            'ii°': { intervals: [2, 7, 8], symbol: 'sus4' },
            'III': { intervals: [3, 8, 10], symbol: 'sus4' },
            'iv': { intervals: [5, 10, 0], symbol: 'sus4' },
            'v': { intervals: [7, 0, 2], symbol: 'sus4' },
            'VI': { intervals: [8, 2, 3], symbol: 'sus4' },
            'VII': { intervals: [10, 3, 5], symbol: 'sus4' }
        }
    }
};

// Common chord progressions
const COMMON_PROGRESSIONS = {
    major: [
        ['I', 'V', 'vi', 'IV'],
        ['I', 'vi', 'IV', 'V'],
        ['I', 'IV', 'V', 'I'],
        ['I', 'ii', 'V', 'I'],
        ['I', 'vi', 'ii', 'V']
    ],
    minor: [
        ['i', 'VI', 'III', 'VII'],
        ['i', 'iv', 'v', 'i'],
        ['i', 'iv', 'VII', 'III'],
        ['i', 'ii°', 'v', 'i'],
        ['i', 'VI', 'iv', 'v']
    ]
};

// Chord transition weights (higher = more likely)
const TRANSITION_WEIGHTS = {
    major: {
        'I': { 'V': 5, 'IV': 4, 'vi': 3, 'ii': 2, 'iii': 1, 'vii°': 0.5 },
        'ii': { 'V': 5, 'vii°': 2, 'IV': 1, 'I': 1, 'vi': 1, 'iii': 0.5 },
        'iii': { 'vi': 4, 'IV': 3, 'I': 1, 'ii': 1, 'V': 1, 'vii°': 0.5 },
        'IV': { 'V': 5, 'I': 4, 'ii': 2, 'vi': 2, 'iii': 1, 'vii°': 0.5 },
        'V': { 'I': 5, 'vi': 3, 'IV': 2, 'ii': 1, 'iii': 1, 'vii°': 0.5 },
        'vi': { 'IV': 4, 'ii': 3, 'V': 3, 'I': 2, 'iii': 1, 'vii°': 0.5 },
        'vii°': { 'I': 5, 'iii': 2, 'vi': 2, 'ii': 1, 'IV': 1, 'V': 1 }
    },
    minor: {
        'i': { 'iv': 4, 'v': 4, 'VI': 3, 'VII': 3, 'III': 2, 'ii°': 1 },
        'ii°': { 'v': 5, 'i': 2, 'VII': 1, 'III': 1, 'iv': 1, 'VI': 1 },
        'III': { 'VI': 4, 'VII': 3, 'iv': 2, 'i': 2, 'v': 1, 'ii°': 0.5 },
        'iv': { 'v': 4, 'i': 3, 'VII': 3, 'VI': 2, 'III': 1, 'ii°': 0.5 },
        'v': { 'i': 5, 'VI': 2, 'iv': 2, 'VII': 1, 'III': 1, 'ii°': 0.5 },
        'VI': { 'III': 3, 'VII': 3, 'iv': 3, 'v': 2, 'i': 2, 'ii°': 1 },
        'VII': { 'III': 4, 'i': 3, 'VI': 2, 'iv': 2, 'v': 1, 'ii°': 0.5 }
    }
};

// Global variables
let currentChords = [];
let currentBassNotes = [];
let currentDrumPattern = null;
let isPlaying = false;
let isPlayingBass = false;
let isPlayingDrums = false;
let synth;
let bassSynth;
let drumKit;
let randomnessLevel = 0.5; // 0 = predictable, 1 = fully random

// DOM elements
const keySelect = document.getElementById('key-select');
const modeInputs = document.querySelectorAll('input[name="mode"]');
const chordCountInput = document.getElementById('chord-count');
const generateBtn = document.getElementById('generate-btn');
const playBtn = document.getElementById('play-btn');
const exportBtn = document.getElementById('export-btn');
const chordDisplay = document.getElementById('chord-display');
const keyboardContainer = document.getElementById('keyboard-container');
const randomnessSlider = document.getElementById('randomness-slider');
const randomnessValue = document.getElementById('randomness-value');
const randomAllBtn = document.getElementById('random-all-btn');
const arpeggioToggle = document.getElementById('arpeggio-toggle');
const arpeggioType = document.getElementById('arpeggio-type');
const chordTypeSelect = document.getElementById('chord-type');
const soundSelect = document.getElementById('sound-select');
const bassPatternSelect = document.getElementById('bass-pattern');
const bassOctaveSelect = document.getElementById('bass-octave');
const generateBassBtn = document.getElementById('generate-bass-btn');
const playBassBtn = document.getElementById('play-bass-btn');
const playTogetherBtn = document.getElementById('play-together-btn');
const bassDisplay = document.getElementById('bass-display');
const bassEnabledToggle = document.getElementById('bass-enabled');
const drumPatternSelect = document.getElementById('drum-pattern');
const drumComplexitySelect = document.getElementById('drum-complexity');
const generateDrumsBtn = document.getElementById('generate-drums-btn');
const playDrumsBtn = document.getElementById('play-drums-btn');
const playAllBtn = document.getElementById('play-all-btn');
const drumsDisplay = document.getElementById('drums-display');
const drumsEnabledToggle = document.getElementById('drums-enabled');
const clearDrumsBtn = document.getElementById('clear-drums-btn');

// Waveform visualization variables
let canvas, ctx;
let analyser;
let waveformArray;
let animationId;

// Initialize canvas
function initCanvas() {
    canvas = document.getElementById('waveform-canvas');
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Initialize Tone.js
async function initAudio() {
    await Tone.start();
    
    // Create analyser for waveform visualization
    analyser = new Tone.Analyser('waveform', 256);
    analyser.toDestination();
    
    synth = new Tone.PolySynth(Tone.Synth).connect(analyser);
    bassSynth = new Tone.Synth().connect(analyser);
    
    // Initialize drum kit
    drumKit = {
        kick: new Tone.MembraneSynth({
            pitchDecay: 0.05,
            octaves: 10,
            oscillator: { type: 'sine' },
            envelope: {
                attack: 0.001,
                decay: 0.4,
                sustain: 0.01,
                release: 0.8
            }
        }).connect(analyser),
        snare: new Tone.NoiseSynth({
            noise: { type: 'white' },
            envelope: {
                attack: 0.001,
                decay: 0.2,
                sustain: 0
            }
        }).connect(analyser),
        hihat: new Tone.MetalSynth({
            frequency: 200,
            envelope: {
                attack: 0.001,
                decay: 0.1,
                release: 0.01
            },
            harmonicity: 5.1,
            modulationIndex: 32,
            resonance: 4000,
            octaves: 1.5
        }).connect(analyser),
        openHihat: new Tone.MetalSynth({
            frequency: 200,
            envelope: {
                attack: 0.001,
                decay: 0.3,
                release: 0.1
            },
            harmonicity: 5.1,
            modulationIndex: 32,
            resonance: 4000,
            octaves: 1.5
        }).connect(analyser)
    };
    
    // Set volumes
    drumKit.kick.volume.value = -10;
    drumKit.snare.volume.value = -12;
    drumKit.hihat.volume.value = -20;
    drumKit.openHihat.volume.value = -18;
    
    updateSynthSound();
    updateBassSound();
}

// Update synthesizer sound based on selection
function updateSynthSound() {
    const soundType = soundSelect.value;
    let oscillatorConfig = { type: soundType };
    let envelopeConfig = {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.3,
        release: 1
    };
    
    // Adjust settings based on sound type
    switch(soundType) {
        case 'sine':
            envelopeConfig.attack = 0.02;
            envelopeConfig.release = 1.5;
            break;
        case 'square':
            envelopeConfig.attack = 0.001;
            envelopeConfig.decay = 0.2;
            envelopeConfig.sustain = 0.2;
            break;
        case 'sawtooth':
            envelopeConfig.attack = 0.01;
            envelopeConfig.decay = 0.3;
            envelopeConfig.sustain = 0.4;
            break;
        case 'fmsine':
            oscillatorConfig = { 
                type: 'fmsine',
                modulationIndex: 10,
                harmonicity: 3
            };
            envelopeConfig.attack = 0.001;
            envelopeConfig.decay = 0.5;
            envelopeConfig.sustain = 0.1;
            break;
        case 'amsine':
            oscillatorConfig = { 
                type: 'amsine',
                modulationIndex: 0.5,
                harmonicity: 1.5
            };
            envelopeConfig.attack = 0.02;
            envelopeConfig.sustain = 0.5;
            break;
        case 'fatsawtooth':
            oscillatorConfig = { 
                type: 'fatsawtooth',
                count: 3,
                spread: 30
            };
            envelopeConfig.attack = 0.02;
            envelopeConfig.sustain = 0.6;
            break;
        case 'fatsquare':
            oscillatorConfig = { 
                type: 'fatsquare',
                count: 3,
                spread: 20
            };
            envelopeConfig.attack = 0.01;
            envelopeConfig.sustain = 0.5;
            break;
        case 'fattriangle':
            oscillatorConfig = { 
                type: 'fattriangle',
                count: 3,
                spread: 20
            };
            envelopeConfig.attack = 0.015;
            envelopeConfig.sustain = 0.6;
            envelopeConfig.release = 1.2;
            break;
        case 'pulse':
            oscillatorConfig = { 
                type: 'pulse',
                width: 0.2
            };
            envelopeConfig.attack = 0.001;
            envelopeConfig.decay = 0.1;
            envelopeConfig.sustain = 0.3;
            break;
    }
    
    synth.set({
        oscillator: oscillatorConfig,
        envelope: envelopeConfig
    });
}

// Update bass synthesizer sound
function updateBassSound() {
    bassSynth.set({
        oscillator: { type: 'sawtooth' },
        envelope: {
            attack: 0.02,
            decay: 0.1,
            sustain: 0.3,
            release: 0.8
        },
        volume: -6 // Slightly quieter than chords
    });
}

// Get scale notes for a given key and mode
function getScale(key, mode) {
    const rootIndex = NOTES.indexOf(key);
    const pattern = mode === 'major' ? MAJOR_SCALE_PATTERN : MINOR_SCALE_PATTERN;
    
    return pattern.map(interval => {
        const noteIndex = (rootIndex + interval) % 12;
        return NOTES[noteIndex];
    });
}

// Get chord notes
function getChordNotes(root, chordType, scale) {
    const rootIndex = scale.indexOf(root);
    const intervals = chordType;
    
    return intervals.map(interval => {
        const noteIndex = (rootIndex + interval) % scale.length;
        return scale[noteIndex];
    });
}

// Weighted random selection
function weightedRandomChoice(weights) {
    const totalWeight = Object.values(weights).reduce((sum, w) => sum + w, 0);
    let random = Math.random() * totalWeight;
    
    for (const [choice, weight] of Object.entries(weights)) {
        random -= weight;
        if (random <= 0) {
            return choice;
        }
    }
    
    // Fallback (shouldn't happen)
    return Object.keys(weights)[0];
}

// Get selected chord types
function getSelectedChordTypes() {
    const selected = Array.from(chordTypeSelect.selectedOptions).map(opt => opt.value);
    return selected.length > 0 ? selected : ['triad']; // Default to triads if nothing selected
}

// Get next chord based on current chord and randomness level
function getNextChord(currentDegree, mode, previousChords = []) {
    const availableDegrees = Object.keys(CHORD_TYPES[mode]['triad']); // Use triad degrees as base
    const weights = TRANSITION_WEIGHTS[mode][currentDegree] || {};
    
    // Filter out the immediate previous chord to avoid repeats
    const lastChord = previousChords[previousChords.length - 1]?.degree;
    const filteredWeights = {};
    
    for (const degree of availableDegrees) {
        if (degree !== lastChord) {
            // Mix between weighted and uniform probability based on randomness level
            const baseWeight = weights[degree] || 1;
            const uniformWeight = 1;
            const finalWeight = (1 - randomnessLevel) * baseWeight + randomnessLevel * uniformWeight;
            filteredWeights[degree] = finalWeight;
        }
    }
    
    // If all chords were filtered out (shouldn't happen), use all available
    if (Object.keys(filteredWeights).length === 0) {
        availableDegrees.forEach(degree => {
            filteredWeights[degree] = 1;
        });
    }
    
    return weightedRandomChoice(filteredWeights);
}

// Generate chord progression
function generateChordProgression() {
    const key = keySelect.value;
    const mode = document.querySelector('input[name="mode"]:checked').value;
    const count = parseInt(chordCountInput.value);
    const selectedTypes = getSelectedChordTypes();
    
    const scale = getScale(key, mode);
    const chordTypes = CHORD_TYPES[mode];
    
    currentChords = [];
    
    // Decide whether to use common progression or generate random
    const useCommonProgression = randomnessLevel < 0.3 && Math.random() < 0.7 && selectedTypes.includes('triad');
    const progressions = COMMON_PROGRESSIONS[mode];
    const matchingProgression = useCommonProgression ? 
        progressions.find(p => p.length === count) : null;
    
    if (matchingProgression) {
        // Use common progression with triads
        currentChords = matchingProgression.map(degree => {
            const chordData = chordTypes['triad'][degree];
            const notes = chordData.intervals.map(i => scale[i % scale.length]);
            return {
                name: `${scale[0]}${chordData.symbol}`,
                notes: notes,
                degree: degree,
                quality: chordData.symbol
            };
        });
    } else {
        // Generate randomized progression with weighted transitions
        const degrees = Object.keys(chordTypes['triad']); // Use triad degrees as reference
        const tonicDegree = mode === 'major' ? 'I' : 'i';
        let currentDegree;
        
        for (let i = 0; i < count; i++) {
            let degree;
            
            if (i === 0) {
                // First chord selection based on randomness
                if (randomnessLevel < 0.3) {
                    // Low randomness: 70% chance to start with tonic
                    degree = Math.random() < 0.7 ? tonicDegree : degrees[Math.floor(Math.random() * degrees.length)];
                } else if (randomnessLevel < 0.7) {
                    // Medium randomness: weighted selection favoring tonic/dominant
                    const startWeights = {};
                    degrees.forEach(d => {
                        if (d === tonicDegree) startWeights[d] = 3;
                        else if (d === (mode === 'major' ? 'V' : 'v')) startWeights[d] = 2;
                        else if (d === (mode === 'major' ? 'IV' : 'iv')) startWeights[d] = 1.5;
                        else startWeights[d] = 1;
                    });
                    degree = weightedRandomChoice(startWeights);
                } else {
                    // High randomness: completely random start
                    degree = degrees[Math.floor(Math.random() * degrees.length)];
                }
                currentDegree = degree;
            } else if (i === count - 1 && randomnessLevel < 0.7) {
                // Last chord tends to be tonic (for resolution) at lower randomness
                const resolutionChance = 1 - randomnessLevel; // Higher chance at lower randomness
                degree = Math.random() < resolutionChance ? tonicDegree : getNextChord(currentDegree, mode, currentChords);
            } else {
                // Use weighted selection for middle chords
                degree = getNextChord(currentDegree, mode, currentChords);
            }
            
            // Randomly select a chord type from the selected types
            const chordType = selectedTypes[Math.floor(Math.random() * selectedTypes.length)];
            const chordData = chordTypes[chordType][degree];
            const notes = chordData.intervals.map(i => scale[i % scale.length]);
            
            // Get root note for chord name
            const rootNoteIndex = chordData.intervals[0];
            const rootNote = scale[rootNoteIndex % scale.length];
            
            currentChords.push({
                name: `${rootNote}${chordData.symbol}`,
                notes: notes,
                degree: degree,
                quality: chordData.symbol
            });
            
            currentDegree = degree;
        }
    }
    
    displayChords();
    enablePlaybackControls();
    createKeyboard();
    
    // Enable bass generation
    if (generateBassBtn) {
        generateBassBtn.disabled = false;
    }
    
    // Enable drums generation
    if (generateDrumsBtn) {
        generateDrumsBtn.disabled = false;
    }
}

// Display chords
function displayChords() {
    chordDisplay.innerHTML = '';
    currentChords.forEach((chord, index) => {
        const chordElement = document.createElement('div');
        chordElement.className = 'chord-item';
        chordElement.innerHTML = `
            <div class="chord-name">${chord.name}</div>
            <div class="chord-degree">${chord.degree}</div>
        `;
        chordElement.id = `chord-${index}`;
        chordDisplay.appendChild(chordElement);
    });
}

// Enable playback controls
function enablePlaybackControls() {
    playBtn.disabled = false;
    exportBtn.disabled = false;
}

// Create visual keyboard
function createKeyboard() {
    keyboardContainer.innerHTML = '';
    const keyboard = document.createElement('div');
    keyboard.className = 'piano-keyboard';
    
    const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const blackKeys = [
        { note: 'C#', after: 'C' },
        { note: 'D#', after: 'D' },
        { note: 'F#', after: 'F' },
        { note: 'G#', after: 'G' },
        { note: 'A#', after: 'A' }
    ];
    
    // Create container for proper positioning
    const keysContainer = document.createElement('div');
    keysContainer.style.display = 'flex';
    keysContainer.style.position = 'relative';
    keysContainer.style.width = '100%';
    
    // Create two octaves
    for (let octave = 4; octave <= 5; octave++) {
        whiteKeys.forEach((note, index) => {
            // Create white key
            const key = document.createElement('div');
            key.className = 'key white';
            key.dataset.note = `${note}${octave}`;
            keysContainer.appendChild(key);
        });
    }
    
    keyboard.appendChild(keysContainer);
    keyboardContainer.appendChild(keyboard);
    
    // Add black keys after white keys are rendered
    setTimeout(() => {
        const whiteKeyElements = keysContainer.querySelectorAll('.key.white');
        let keyIndex = 0;
        
        for (let octave = 4; octave <= 5; octave++) {
            whiteKeys.forEach((note) => {
                blackKeys.forEach(blackKey => {
                    if (blackKey.after === note) {
                        const blackKeyElement = document.createElement('div');
                        blackKeyElement.className = 'key black';
                        blackKeyElement.dataset.note = `${blackKey.note}${octave}`;
                        blackKeyElement.style.position = 'absolute';
                        
                        // Position black key between white keys
                        const whiteKey = whiteKeyElements[keyIndex];
                        if (whiteKey && whiteKey.nextSibling) {
                            const rect = whiteKey.getBoundingClientRect();
                            const containerRect = keysContainer.getBoundingClientRect();
                            const position = rect.right - containerRect.left - 15;
                            blackKeyElement.style.left = `${position}px`;
                            keysContainer.appendChild(blackKeyElement);
                        }
                    }
                });
                keyIndex++;
            });
        }
    }, 10);
}

// Highlight keys on keyboard
function highlightKeys(notes) {
    // Clear all active keys
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('active');
    });
    
    // Highlight chord notes in both octaves
    notes.forEach(note => {
        // Highlight in octave 4
        const keyElement4 = document.querySelector(`[data-note="${note}4"]`);
        if (keyElement4) {
            keyElement4.classList.add('active');
        }
        
        // Also highlight in octave 5
        const keyElement5 = document.querySelector(`[data-note="${note}5"]`);
        if (keyElement5) {
            keyElement5.classList.add('active');
        }
    });
}

// Play chord progression
async function playChordProgression() {
    try {
        // Check if we have chords to play
        if (!currentChords || currentChords.length === 0) {
            alert('Please generate a chord progression first.');
            return;
        }
        
        // Ensure audio context is running
        if (Tone.context.state !== 'running') {
            await Tone.start();
        }
        
        if (isPlaying) {
            // Stop playback
            isPlaying = false;
            isPlayingBass = false;
            playBtn.textContent = 'Play';
            if (playTogetherBtn) {
                playTogetherBtn.textContent = 'Play Together';
            }
            return;
        }
        
        isPlaying = true;
        playBtn.textContent = 'Stop';
        startVisualization();
        
        // Play chords in sequence using simpler approach
        let chordIndex = 0;
        const playNextChord = () => {
            if (!isPlaying) {
                // Stop playback
                isPlaying = false;
                isPlayingBass = false;
                playBtn.textContent = 'Play';
                if (playTogetherBtn) {
                    playTogetherBtn.textContent = 'Play Together';
                }
                document.querySelectorAll('.chord-item').forEach(el => {
                    el.classList.remove('playing');
                });
                document.querySelectorAll('.key').forEach(key => {
                    key.classList.remove('active');
                });
                stopVisualization();
                return;
            }
            
            // Loop back to beginning if we've reached the end and arpeggio is on
            if (chordIndex >= currentChords.length) {
                if (arpeggioToggle.checked) {
                    chordIndex = 0; // Loop back to start
                } else {
                    // Non-arpeggio mode: stop when done
                    isPlaying = false;
                    isPlayingBass = false;
                    playBtn.textContent = 'Play';
                    if (playTogetherBtn) {
                        playTogetherBtn.textContent = 'Play Together';
                    }
                    document.querySelectorAll('.chord-item').forEach(el => {
                        el.classList.remove('playing');
                    });
                    document.querySelectorAll('.key').forEach(key => {
                        key.classList.remove('active');
                    });
                    stopVisualization();
                    return;
                }
            }
            
            const chord = currentChords[chordIndex];
            const notes = chord.notes.map(note => `${note}4`);
            
            // Update visual feedback
            document.querySelectorAll('.chord-item').forEach(el => {
                el.classList.remove('playing');
            });
            const chordElement = document.getElementById(`chord-${chordIndex}`);
            if (chordElement) {
                chordElement.classList.add('playing');
            }
            
            if (arpeggioToggle.checked) {
                // Get arpeggio pattern
                const pattern = arpeggioType.value;
                let noteSequence = [];
                
                // Create note sequence based on pattern
                switch (pattern) {
                    case 'up':
                        noteSequence = [...notes];
                        break;
                    case 'down':
                        noteSequence = [...notes].reverse();
                        break;
                    case 'up-down':
                        noteSequence = [...notes, ...notes.slice(1, -1).reverse()];
                        break;
                    case 'down-up':
                        noteSequence = [...notes].reverse().concat(notes.slice(1, -1));
                        break;
                    case 'random':
                        // Play each note once in random order
                        noteSequence = [...notes].sort(() => Math.random() - 0.5);
                        break;
                    case 'chord-tone':
                        // Play root, fifth, third, root (octave higher)
                        noteSequence = [notes[0], notes[2], notes[1], notes[0].slice(0, -1) + '5'];
                        break;
                    default:
                        noteSequence = [...notes];
                }
                
                // Arpeggiate the chord
                const arpSpeed = 150; // milliseconds between notes
                noteSequence.forEach((note, index) => {
                    setTimeout(() => {
                        if (isPlaying) {
                            synth.triggerAttackRelease(note, '8n');
                            // Highlight individual keys during arpeggio
                            document.querySelectorAll('.key').forEach(key => {
                                key.classList.remove('active');
                            });
                            const noteWithoutOctave = note.slice(0, -1);
                            const keyElement = document.querySelector(`[data-note="${noteWithoutOctave}4"]`);
                            const keyElement5 = document.querySelector(`[data-note="${noteWithoutOctave}5"]`);
                            if (keyElement) keyElement.classList.add('active');
                            if (keyElement5) keyElement5.classList.add('active');
                        }
                    }, index * arpSpeed);
                });
                
                // After arpeggio completes, show all chord notes
                setTimeout(() => {
                    if (isPlaying) {
                        highlightKeys(chord.notes);
                    }
                }, noteSequence.length * arpSpeed);
            } else {
                // Play the chord normally
                synth.triggerAttackRelease(notes, '2n');
                highlightKeys(chord.notes);
            }
            
            // Move to next chord
            chordIndex++;
            if (isPlaying) {
                let nextDelay;
                if (arpeggioToggle.checked) {
                    const pattern = arpeggioType.value;
                    let sequenceLength = notes.length;
                    if (pattern === 'up-down' || pattern === 'down-up') {
                        sequenceLength = notes.length * 2 - 2;
                    } else if (pattern === 'chord-tone') {
                        sequenceLength = 4;
                    }
                    // No pause - only the arpeggio duration
                    nextDelay = sequenceLength * 150;
                } else {
                    nextDelay = 1000;
                }
                setTimeout(playNextChord, nextDelay);
            }
        };
        
        // Start playing
        playNextChord();
        
    } catch (error) {
        console.error('Error playing chord progression:', error);
        isPlaying = false;
        playBtn.textContent = 'Play';
        alert('Error playing audio. Please try again.');
    }
}

// Randomize all parameters
function randomizeAllParameters() {
    // Random key
    const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    keySelect.value = randomKey;
    
    // Random mode (50/50 chance)
    const randomMode = Math.random() < 0.5 ? 'major' : 'minor';
    document.getElementById(randomMode).checked = true;
    
    // Random chord count (4, 8, 12, or 16)
    const chordCounts = [4, 8, 12, 16];
    const randomChordCount = chordCounts[Math.floor(Math.random() * chordCounts.length)];
    chordCountInput.value = randomChordCount;
    
    // Random chord types
    const allChordTypes = ['triad', '7th', '9th', 'sus2', 'sus4'];
    const numTypesToSelect = Math.floor(Math.random() * 3) + 1; // Select 1-3 types
    const selectedTypes = [];
    
    // Always include triads if selecting only one type (70% chance)
    if (numTypesToSelect === 1 && Math.random() < 0.7) {
        selectedTypes.push('triad');
    } else {
        // Randomly select chord types
        const typesCopy = [...allChordTypes];
        for (let i = 0; i < numTypesToSelect && typesCopy.length > 0; i++) {
            const index = Math.floor(Math.random() * typesCopy.length);
            selectedTypes.push(typesCopy.splice(index, 1)[0]);
        }
    }
    
    // Clear all selections first
    Array.from(chordTypeSelect.options).forEach(option => {
        option.selected = false;
    });
    
    // Select the random chord types
    selectedTypes.forEach(type => {
        const option = Array.from(chordTypeSelect.options).find(opt => opt.value === type);
        if (option) {
            option.selected = true;
        }
    });
    
    // Random randomness level (between 0 and 100, weighted towards middle)
    const randomnessValues = [];
    // Create a bell curve distribution
    for (let i = 0; i <= 100; i += 5) {
        const weight = Math.exp(-Math.pow(i - 50, 2) / 1000);
        const count = Math.round(weight * 10);
        for (let j = 0; j < count; j++) {
            randomnessValues.push(i);
        }
    }
    const randomRandomness = randomnessValues[Math.floor(Math.random() * randomnessValues.length)];
    randomnessSlider.value = randomRandomness;
    randomnessLevel = randomRandomness / 100;
    randomnessValue.textContent = `${randomRandomness}%`;
    
    // Random sound selection
    const sounds = ['triangle', 'sine', 'square', 'sawtooth', 'fmsine', 'amsine', 'fatsawtooth', 'fatsquare', 'fattriangle', 'pulse'];
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    soundSelect.value = randomSound;
    updateSynthSound();
    
    // Random arpeggio settings
    const useArpeggio = Math.random() < 0.3; // 30% chance to use arpeggio
    arpeggioToggle.checked = useArpeggio;
    arpeggioType.style.display = useArpeggio ? 'inline-block' : 'none';
    if (useArpeggio) {
        const arpeggioTypes = ['up', 'down', 'up-down', 'down-up', 'random', 'chord-tone'];
        const randomArpeggioType = arpeggioTypes[Math.floor(Math.random() * arpeggioTypes.length)];
        arpeggioType.value = randomArpeggioType;
    }
    
    // Random bass settings
    const bassPatterns = ['root', 'root-fifth', 'walking', 'arpeggiated', 'pedal'];
    const randomBassPattern = bassPatterns[Math.floor(Math.random() * bassPatterns.length)];
    bassPatternSelect.value = randomBassPattern;
    
    const bassOctaves = ['2', '3', '4'];
    const randomBassOctave = bassOctaves[Math.floor(Math.random() * bassOctaves.length)];
    bassOctaveSelect.value = randomBassOctave;
    
    // Random whether to include bass (70% chance)
    bassEnabledToggle.checked = Math.random() < 0.7;
    
    // Random drum settings
    const drumPatterns = ['basic-beat', 'rock', 'jazz', 'latin', 'funk', 'electronic', 'shuffle', 'half-time'];
    const randomDrumPattern = drumPatterns[Math.floor(Math.random() * drumPatterns.length)];
    drumPatternSelect.value = randomDrumPattern;
    
    const drumComplexities = ['simple', 'medium', 'complex'];
    const randomDrumComplexity = drumComplexities[Math.floor(Math.random() * drumComplexities.length)];
    drumComplexitySelect.value = randomDrumComplexity;
    
    // Random whether to include drums (60% chance)
    drumsEnabledToggle.checked = Math.random() < 0.6;
    
    // Generate with new random parameters
    generateChordProgression();
    
    // After chord generation, generate bass and drums
    setTimeout(() => {
        if (currentChords.length > 0) {
            generateBassLine();
            generateDrumPattern();
        }
    }, 100);
}

// Export MIDI file
function exportMIDI() {
    // Create a new MIDI file
    const midi = new Midi.Midi();
    
    // Create a track
    const track = midi.addTrack();
    track.name = "Chord Progression";
    
    // Set tempo
    midi.header.tempos = [{ bpm: 120, ticks: 0 }];
    
    // Add chords to track
    let currentTime = 0;
    const noteDuration = 0.5; // Half note duration in seconds
    
    currentChords.forEach(chord => {
        // Convert note names to MIDI numbers
        chord.notes.forEach(note => {
            const noteIndex = NOTES.indexOf(note);
            const midiNote = 60 + noteIndex; // C4 = 60
            
            track.addNote({
                midi: midiNote,
                time: currentTime,
                duration: noteDuration,
                velocity: 80
            });
        });
        
        currentTime += noteDuration;
    });
    
    // Convert to blob and download
    const blob = new Blob([midi.toArray()], { type: 'audio/midi' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chord-progression.mid';
    a.click();
    
    URL.revokeObjectURL(url);
}

// Event listeners
generateBtn.addEventListener('click', generateChordProgression);
playBtn.addEventListener('click', playChordProgression);
exportBtn.addEventListener('click', exportMIDI);
randomAllBtn.addEventListener('click', randomizeAllParameters);

// Randomness slider event listener
randomnessSlider.addEventListener('input', (e) => {
    randomnessLevel = parseInt(e.target.value) / 100;
    randomnessValue.textContent = `${e.target.value}%`;
});

// Toggle arpeggio type dropdown visibility
arpeggioToggle.addEventListener('change', (e) => {
    arpeggioType.style.display = e.target.checked ? 'inline-block' : 'none';
});

// Sound selection change
soundSelect.addEventListener('change', updateSynthSound);

// Generate bass line
function generateBassLine() {
    const pattern = bassPatternSelect.value;
    const octave = bassOctaveSelect.value;
    currentBassNotes = [];
    
    currentChords.forEach((chord, index) => {
        const rootNote = chord.notes[0]; // Root note of the chord
        const fifthNote = chord.notes[2]; // Fifth of the chord
        
        switch(pattern) {
            case 'root':
                // Just play root notes
                currentBassNotes.push({
                    note: `${rootNote}${octave}`,
                    duration: '2n',
                    chord: chord.name
                });
                break;
                
            case 'root-fifth':
                // Alternate between root and fifth
                currentBassNotes.push({
                    note: `${rootNote}${octave}`,
                    duration: '4n',
                    chord: chord.name
                });
                currentBassNotes.push({
                    note: `${fifthNote}${octave}`,
                    duration: '4n',
                    chord: chord.name
                });
                break;
                
            case 'walking':
                // Walking bass line - uses scale notes to walk between chords
                const nextChord = currentChords[index + 1] || currentChords[0];
                const nextRoot = nextChord.notes[0];
                const scale = getScale(keySelect.value, document.querySelector('input[name="mode"]:checked').value);
                
                // Find scale notes between current and next root
                const currentIndex = scale.indexOf(rootNote);
                const nextIndex = scale.indexOf(nextRoot);
                
                currentBassNotes.push({
                    note: `${rootNote}${octave}`,
                    duration: '4n',
                    chord: chord.name
                });
                
                // Add a passing tone
                let passingNote;
                if (Math.abs(nextIndex - currentIndex) > 2) {
                    // If jump is large, use the fifth
                    passingNote = fifthNote;
                } else {
                    // Use a scale tone between them
                    const direction = nextIndex > currentIndex ? 1 : -1;
                    const passingIndex = (currentIndex + direction + scale.length) % scale.length;
                    passingNote = scale[passingIndex];
                }
                
                currentBassNotes.push({
                    note: `${passingNote}${octave}`,
                    duration: '4n',
                    chord: chord.name
                });
                break;
                
            case 'arpeggiated':
                // Play chord tones in sequence
                chord.notes.forEach((note, i) => {
                    currentBassNotes.push({
                        note: `${note}${i === 0 ? octave : (parseInt(octave) + (i > 2 ? 1 : 0))}`,
                        duration: '8n',
                        chord: chord.name
                    });
                });
                break;
                
            case 'pedal':
                // Pedal tone - always play the tonic
                const tonic = getScale(keySelect.value, document.querySelector('input[name="mode"]:checked').value)[0];
                currentBassNotes.push({
                    note: `${tonic}${octave}`,
                    duration: '2n',
                    chord: chord.name
                });
                break;
        }
    });
    
    displayBassNotes();
    playBassBtn.disabled = false;
    playTogetherBtn.disabled = false;
}

// Display bass notes
function displayBassNotes() {
    bassDisplay.innerHTML = '';
    currentBassNotes.forEach((bassNote, index) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'bass-note';
        noteElement.textContent = bassNote.note;
        noteElement.id = `bass-${index}`;
        bassDisplay.appendChild(noteElement);
    });
}

// Play bass line only
async function playBassLine() {
    if (!currentBassNotes || currentBassNotes.length === 0) {
        alert('Please generate a bass line first.');
        return;
    }
    
    if (Tone.context.state !== 'running') {
        await Tone.start();
    }
    
    if (isPlayingBass) {
        isPlayingBass = false;
        playBassBtn.textContent = 'Play Bass';
        return;
    }
    
    isPlayingBass = true;
    playBassBtn.textContent = 'Stop Bass';
    startVisualization();
    
    let noteIndex = 0;
    const playNextBassNote = () => {
        if (!isPlayingBass || noteIndex >= currentBassNotes.length) {
            isPlayingBass = false;
            playBassBtn.textContent = 'Play Bass';
            document.querySelectorAll('.bass-note').forEach(el => {
                el.classList.remove('playing');
            });
            stopVisualization();
            return;
        }
        
        const bassNote = currentBassNotes[noteIndex];
        
        // Visual feedback
        document.querySelectorAll('.bass-note').forEach(el => {
            el.classList.remove('playing');
        });
        const noteElement = document.getElementById(`bass-${noteIndex}`);
        if (noteElement) {
            noteElement.classList.add('playing');
        }
        
        // Play the note
        bassSynth.triggerAttackRelease(bassNote.note, bassNote.duration);
        
        // Calculate delay based on note duration
        const durationMs = Tone.Time(bassNote.duration).toMilliseconds();
        
        noteIndex++;
        setTimeout(playNextBassNote, durationMs);
    };
    
    playNextBassNote();
}

// Modified playback function to include bass
async function playChordProgressionWithBass() {
    try {
        if (!currentChords || currentChords.length === 0) {
            alert('Please generate a chord progression first.');
            return;
        }
        
        if (!currentBassNotes || currentBassNotes.length === 0) {
            alert('Please generate a bass line first.');
            return;
        }
        
        if (Tone.context.state !== 'running') {
            await Tone.start();
        }
        
        if (isPlaying || isPlayingBass) {
            isPlaying = false;
            isPlayingBass = false;
            playTogetherBtn.textContent = 'Play Together';
            playBtn.textContent = 'Play';
            return;
        }
        
        isPlaying = true;
        isPlayingBass = true;
        playTogetherBtn.textContent = 'Stop';
        startVisualization();
        
        // Play both chords and bass simultaneously
        let chordIndex = 0;
        let bassIndex = 0;
        
        const playNext = () => {
            if (!isPlaying || !isPlayingBass) {
                // Stop everything
                isPlaying = false;
                isPlayingBass = false;
                playTogetherBtn.textContent = 'Play Together';
                playBtn.textContent = 'Play';
                document.querySelectorAll('.chord-item').forEach(el => {
                    el.classList.remove('playing');
                });
                document.querySelectorAll('.bass-note').forEach(el => {
                    el.classList.remove('playing');
                });
                document.querySelectorAll('.key').forEach(key => {
                    key.classList.remove('active');
                });
                return;
            }
            
            // Check if we're done with chords
            if (chordIndex >= currentChords.length) {
                if (arpeggioToggle.checked) {
                    chordIndex = 0;
                    bassIndex = 0;
                } else {
                    isPlaying = false;
                    isPlayingBass = false;
                    playTogetherBtn.textContent = 'Play Together';
                    document.querySelectorAll('.chord-item').forEach(el => {
                        el.classList.remove('playing');
                    });
                    document.querySelectorAll('.bass-note').forEach(el => {
                        el.classList.remove('playing');
                    });
                    document.querySelectorAll('.key').forEach(key => {
                        key.classList.remove('active');
                    });
                    stopVisualization();
                    return;
                }
            }
            
            // Play current chord
            const chord = currentChords[chordIndex];
            const notes = chord.notes.map(note => `${note}4`);
            
            // Update chord visual feedback
            document.querySelectorAll('.chord-item').forEach(el => {
                el.classList.remove('playing');
            });
            const chordElement = document.getElementById(`chord-${chordIndex}`);
            if (chordElement) {
                chordElement.classList.add('playing');
            }
            
            // Handle chord playback
            if (arpeggioToggle.checked) {
                // Arpeggio logic (same as before)
                const pattern = arpeggioType.value;
                let noteSequence = [];
                
                switch (pattern) {
                    case 'up':
                        noteSequence = [...notes];
                        break;
                    case 'down':
                        noteSequence = [...notes].reverse();
                        break;
                    case 'up-down':
                        noteSequence = [...notes, ...notes.slice(1, -1).reverse()];
                        break;
                    case 'down-up':
                        noteSequence = [...notes].reverse().concat(notes.slice(1, -1));
                        break;
                    case 'random':
                        noteSequence = [...notes].sort(() => Math.random() - 0.5);
                        break;
                    case 'chord-tone':
                        noteSequence = [notes[0], notes[2], notes[1], notes[0].slice(0, -1) + '5'];
                        break;
                    default:
                        noteSequence = [...notes];
                }
                
                const arpSpeed = 150;
                noteSequence.forEach((note, index) => {
                    setTimeout(() => {
                        if (isPlaying) {
                            synth.triggerAttackRelease(note, '8n');
                        }
                    }, index * arpSpeed);
                });
            } else {
                synth.triggerAttackRelease(notes, '2n');
                highlightKeys(chord.notes);
            }
            
            // Play bass notes for this chord
            let bassDuration = 0;
            const bassPattern = bassPatternSelect.value;
            
            // Calculate how many bass notes belong to this chord
            let bassNotesForChord = [];
            if (bassPattern === 'root') {
                bassNotesForChord = [currentBassNotes[chordIndex]];
            } else if (bassPattern === 'root-fifth' || bassPattern === 'walking') {
                bassNotesForChord = currentBassNotes.slice(chordIndex * 2, (chordIndex + 1) * 2);
            } else if (bassPattern === 'arpeggiated') {
                const notesPerChord = currentChords[0].notes.length;
                bassNotesForChord = currentBassNotes.slice(chordIndex * notesPerChord, (chordIndex + 1) * notesPerChord);
            } else if (bassPattern === 'pedal') {
                bassNotesForChord = [currentBassNotes[chordIndex]];
            }
            
            // Play bass notes for this chord
            bassNotesForChord.forEach((bassNote, i) => {
                if (bassNote) {
                    const delay = i * Tone.Time(bassNote.duration).toMilliseconds();
                    setTimeout(() => {
                        if (isPlayingBass) {
                            bassSynth.triggerAttackRelease(bassNote.note, bassNote.duration);
                            
                            // Update bass visual feedback
                            document.querySelectorAll('.bass-note').forEach(el => {
                                el.classList.remove('playing');
                            });
                            const actualBassIndex = currentBassNotes.indexOf(bassNote);
                            const bassElement = document.getElementById(`bass-${actualBassIndex}`);
                            if (bassElement) {
                                bassElement.classList.add('playing');
                            }
                        }
                    }, delay);
                    bassDuration += Tone.Time(bassNote.duration).toMilliseconds();
                }
            });
            
            // Move to next chord
            chordIndex++;
            
            // Calculate next delay
            let nextDelay;
            if (arpeggioToggle.checked) {
                const pattern = arpeggioType.value;
                let sequenceLength = notes.length;
                if (pattern === 'up-down' || pattern === 'down-up') {
                    sequenceLength = notes.length * 2 - 2;
                } else if (pattern === 'chord-tone') {
                    sequenceLength = 4;
                }
                nextDelay = sequenceLength * 150;
            } else {
                nextDelay = 1000;
            }
            
            // Use the longer of chord or bass duration
            nextDelay = Math.max(nextDelay, bassDuration);
            
            setTimeout(playNext, nextDelay);
        };
        
        // Start playback
        playNext();
        
    } catch (error) {
        console.error('Error playing with bass:', error);
        isPlaying = false;
        isPlayingBass = false;
        playTogetherBtn.textContent = 'Play Together';
    }
}

// Generate drum pattern
function generateDrumPattern() {
    const style = drumPatternSelect.value;
    const complexity = drumComplexitySelect.value;
    
    // Generate randomized patterns based on style and complexity
    currentDrumPattern = generateRandomDrumPattern(style, complexity);
    displayDrumPattern();
    playDrumsBtn.disabled = false;
    playAllBtn.disabled = false;
    clearDrumsBtn.disabled = false;
}

// Generate a random drum pattern based on style and complexity
function generateRandomDrumPattern(style, complexity) {
    const pattern = {
        kick: new Array(16).fill(0),
        snare: new Array(16).fill(0),
        hihat: new Array(16).fill(0),
        openHihat: new Array(16).fill(0)
    };
    
    // Define style-specific probabilities for each beat (0-1)
    const styleGuides = {
        'basic-beat': {
            kick: { 
                downbeats: [0, 4, 8, 12], // Strong beats
                upbeats: [2, 6, 10, 14],  // Medium beats
                probability: { simple: 0.9, medium: 0.8, complex: 0.7 }
            },
            snare: { 
                downbeats: [4, 12],
                upbeats: [],
                probability: { simple: 0.95, medium: 0.9, complex: 0.85 }
            },
            hihat: {
                pattern: 'eighth', // eighth, sixteenth, or sparse
                probability: { simple: 0.7, medium: 0.8, complex: 0.9 }
            }
        },
        'rock': {
            kick: {
                downbeats: [0, 2, 8, 10],
                upbeats: [4, 6, 12, 14],
                probability: { simple: 0.9, medium: 0.8, complex: 0.7 }
            },
            snare: {
                downbeats: [4, 12],
                upbeats: [6, 14],
                probability: { simple: 0.95, medium: 0.85, complex: 0.75 }
            },
            hihat: {
                pattern: 'sixteenth',
                probability: { simple: 0.8, medium: 0.9, complex: 0.95 }
            }
        },
        'jazz': {
            kick: {
                downbeats: [0, 8],
                upbeats: [3, 6, 11, 14],
                probability: { simple: 0.7, medium: 0.6, complex: 0.5 }
            },
            snare: {
                downbeats: [2, 4, 6, 10, 12, 14],
                upbeats: [1, 3, 5, 7, 9, 11, 13, 15],
                probability: { simple: 0.4, medium: 0.5, complex: 0.6 }
            },
            hihat: {
                pattern: 'jazz',
                probability: { simple: 0.6, medium: 0.7, complex: 0.8 }
            }
        },
        'latin': {
            kick: {
                downbeats: [0, 3, 6, 8, 11, 14],
                upbeats: [1, 4, 9, 12],
                probability: { simple: 0.85, medium: 0.8, complex: 0.75 }
            },
            snare: {
                downbeats: [2, 4, 7, 10, 12],
                upbeats: [1, 5, 9, 13],
                probability: { simple: 0.6, medium: 0.7, complex: 0.8 }
            },
            hihat: {
                pattern: 'sixteenth',
                probability: { simple: 0.9, medium: 0.95, complex: 0.85 }
            }
        },
        'funk': {
            kick: {
                downbeats: [0, 6, 10],
                upbeats: [3, 7, 11, 15],
                probability: { simple: 0.8, medium: 0.7, complex: 0.6 }
            },
            snare: {
                downbeats: [4, 12],
                upbeats: [2, 5, 7, 9, 13],
                probability: { simple: 0.7, medium: 0.6, complex: 0.5 }
            },
            hihat: {
                pattern: 'funk',
                probability: { simple: 0.7, medium: 0.8, complex: 0.9 }
            }
        },
        'electronic': {
            kick: {
                downbeats: [0, 4, 8, 12],
                upbeats: [],
                probability: { simple: 0.95, medium: 0.9, complex: 0.8 }
            },
            snare: {
                downbeats: [4, 12],
                upbeats: [7, 15],
                probability: { simple: 0.9, medium: 0.85, complex: 0.8 }
            },
            hihat: {
                pattern: 'electronic',
                probability: { simple: 0.4, medium: 0.6, complex: 0.8 }
            }
        },
        'shuffle': {
            kick: {
                downbeats: [0, 3, 6, 9, 12],
                upbeats: [1, 7, 13],
                probability: { simple: 0.8, medium: 0.75, complex: 0.7 }
            },
            snare: {
                downbeats: [6, 12],
                upbeats: [4, 10],
                probability: { simple: 0.85, medium: 0.8, complex: 0.75 }
            },
            hihat: {
                pattern: 'shuffle',
                probability: { simple: 0.7, medium: 0.8, complex: 0.85 }
            }
        },
        'half-time': {
            kick: {
                downbeats: [0, 8],
                upbeats: [6, 14],
                probability: { simple: 0.9, medium: 0.8, complex: 0.7 }
            },
            snare: {
                downbeats: [8],
                upbeats: [7, 15],
                probability: { simple: 0.95, medium: 0.85, complex: 0.75 }
            },
            hihat: {
                pattern: 'sparse',
                probability: { simple: 0.5, medium: 0.6, complex: 0.7 }
            }
        }
    };
    
    const guide = styleGuides[style];
    
    // Generate kick pattern
    guide.kick.downbeats.forEach(beat => {
        if (Math.random() < guide.kick.probability[complexity]) {
            pattern.kick[beat] = 1;
        }
    });
    
    // Add some upbeats based on complexity
    if (complexity !== 'simple') {
        guide.kick.upbeats.forEach(beat => {
            const prob = complexity === 'medium' ? 0.3 : 0.5;
            if (Math.random() < prob) {
                pattern.kick[beat] = 1;
            }
        });
    }
    
    // Generate snare pattern
    guide.snare.downbeats.forEach(beat => {
        if (Math.random() < guide.snare.probability[complexity]) {
            pattern.snare[beat] = 1;
        }
    });
    
    if (complexity !== 'simple') {
        guide.snare.upbeats.forEach(beat => {
            const prob = complexity === 'medium' ? 0.2 : 0.4;
            if (Math.random() < prob) {
                pattern.snare[beat] = 1;
            }
        });
    }
    
    // Generate hi-hat pattern
    const hihatProb = guide.hihat.probability[complexity];
    switch (guide.hihat.pattern) {
        case 'eighth':
            // Play on eighth notes
            for (let i = 0; i < 16; i += 2) {
                if (Math.random() < hihatProb) {
                    pattern.hihat[i] = 1;
                }
            }
            break;
            
        case 'sixteenth':
            // Play on most sixteenth notes
            for (let i = 0; i < 16; i++) {
                if (Math.random() < hihatProb) {
                    pattern.hihat[i] = 1;
                }
            }
            break;
            
        case 'jazz':
            // Syncopated jazz pattern
            [0, 3, 4, 7, 8, 11, 12, 15].forEach(beat => {
                if (Math.random() < hihatProb) {
                    pattern.hihat[beat] = 1;
                }
            });
            break;
            
        case 'funk':
            // Funky hi-hat with gaps
            for (let i = 0; i < 16; i++) {
                if (i % 4 !== 3 && Math.random() < hihatProb) {
                    pattern.hihat[i] = 1;
                }
            }
            break;
            
        case 'electronic':
            // Sparse electronic pattern
            [2, 6, 10, 14].forEach(beat => {
                if (Math.random() < hihatProb) {
                    pattern.hihat[beat] = 1;
                }
            });
            break;
            
        case 'shuffle':
            // Shuffle feel
            [0, 3, 6, 9, 12, 15].forEach(beat => {
                if (Math.random() < hihatProb) {
                    pattern.hihat[beat] = 1;
                }
            });
            break;
            
        case 'sparse':
            // Very sparse pattern
            [0, 4, 8, 12].forEach(beat => {
                if (Math.random() < hihatProb) {
                    pattern.hihat[beat] = 1;
                }
            });
            break;
    }
    
    // Add open hi-hats (sparse, usually on off-beats)
    if (complexity !== 'simple') {
        const openHihatPositions = [2, 6, 10, 14, 15];
        openHihatPositions.forEach(pos => {
            const prob = complexity === 'medium' ? 0.15 : 0.25;
            if (Math.random() < prob && pattern.hihat[pos] === 0) {
                pattern.openHihat[pos] = 1;
                // Remove closed hi-hat if there's an open one
                if (pos > 0) pattern.hihat[pos - 1] = 0;
            }
        });
    }
    
    // Ensure we have at least some hits
    if (pattern.kick.every(hit => hit === 0)) {
        pattern.kick[0] = 1;
        pattern.kick[8] = 1;
    }
    if (pattern.snare.every(hit => hit === 0)) {
        pattern.snare[4] = 1;
        pattern.snare[12] = 1;
    }
    
    return pattern;
}

// Display drum pattern
function displayDrumPattern() {
    drumsDisplay.innerHTML = '';
    
    // Add beat numbers header
    const headerDiv = document.createElement('div');
    headerDiv.className = 'drum-track';
    
    const spacerDiv = document.createElement('div');
    spacerDiv.className = 'drum-track-name';
    headerDiv.appendChild(spacerDiv);
    
    const beatNumbersDiv = document.createElement('div');
    beatNumbersDiv.className = 'drum-pattern';
    
    for (let i = 0; i < 16; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.className = 'drum-beat-number';
        numberDiv.textContent = i % 4 === 0 ? Math.floor(i / 4) + 1 : '';
        numberDiv.style.width = '20px';
        numberDiv.style.textAlign = 'center';
        numberDiv.style.fontSize = '0.7em';
        numberDiv.style.color = '#666';
        if (i % 4 === 0 && i > 0) {
            numberDiv.style.marginLeft = '6px';
        }
        beatNumbersDiv.appendChild(numberDiv);
    }
    
    headerDiv.appendChild(beatNumbersDiv);
    drumsDisplay.appendChild(headerDiv);
    
    const instruments = ['kick', 'snare', 'hihat', 'openHihat'];
    const instrumentNames = {
        kick: 'Kick',
        snare: 'Snare',
        hihat: 'Hi-Hat',
        openHihat: 'Open HH'
    };
    
    instruments.forEach(instrument => {
        const trackDiv = document.createElement('div');
        trackDiv.className = 'drum-track';
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'drum-track-name';
        nameDiv.textContent = instrumentNames[instrument];
        trackDiv.appendChild(nameDiv);
        
        const patternDiv = document.createElement('div');
        patternDiv.className = 'drum-pattern';
        patternDiv.dataset.instrument = instrument;
        
        currentDrumPattern[instrument].forEach((hit, index) => {
            const hitDiv = document.createElement('div');
            hitDiv.className = 'drum-hit';
            hitDiv.dataset.index = index;
            hitDiv.dataset.instrument = instrument;
            
            if (hit === 1) {
                hitDiv.classList.add('active');
                if (index % 4 === 0) {
                    hitDiv.classList.add('accent');
                }
            }
            hitDiv.textContent = hit ? '●' : '';
            
            // Make clickable
            hitDiv.style.cursor = 'pointer';
            hitDiv.addEventListener('click', toggleDrumHit);
            
            patternDiv.appendChild(hitDiv);
        });
        
        trackDiv.appendChild(patternDiv);
        drumsDisplay.appendChild(trackDiv);
    });
}

// Toggle drum hit on click
function toggleDrumHit(event) {
    const element = event.target;
    const instrument = element.dataset.instrument;
    const index = parseInt(element.dataset.index);
    
    // Toggle the value in the pattern
    currentDrumPattern[instrument][index] = currentDrumPattern[instrument][index] === 1 ? 0 : 1;
    
    // Update the visual
    if (currentDrumPattern[instrument][index] === 1) {
        element.classList.add('active');
        if (index % 4 === 0) {
            element.classList.add('accent');
        }
        element.textContent = '●';
    } else {
        element.classList.remove('active');
        element.classList.remove('accent');
        element.textContent = '';
    }
    
    // Play a preview sound when toggling on
    if (currentDrumPattern[instrument][index] === 1 && !isPlayingDrums) {
        // Play the drum sound for feedback
        switch(instrument) {
            case 'kick':
                drumKit.kick.triggerAttackRelease('C1', '8n');
                break;
            case 'snare':
                drumKit.snare.triggerAttackRelease('8n');
                break;
            case 'hihat':
                drumKit.hihat.triggerAttackRelease('C4', '16n');
                break;
            case 'openHihat':
                drumKit.openHihat.triggerAttackRelease('C4', '8n');
                break;
        }
    }
}

// Clear drum pattern
function clearDrumPattern() {
    if (!currentDrumPattern) return;
    
    // Clear all patterns
    currentDrumPattern.kick.fill(0);
    currentDrumPattern.snare.fill(0);
    currentDrumPattern.hihat.fill(0);
    currentDrumPattern.openHihat.fill(0);
    
    // Update display
    displayDrumPattern();
}

// Play drum pattern
async function playDrumPattern() {
    if (!currentDrumPattern) {
        alert('Please generate a drum pattern first.');
        return;
    }
    
    if (Tone.context.state !== 'running') {
        await Tone.start();
    }
    
    if (isPlayingDrums) {
        isPlayingDrums = false;
        playDrumsBtn.textContent = 'Play Drums';
        return;
    }
    
    isPlayingDrums = true;
    playDrumsBtn.textContent = 'Stop Drums';
    startVisualization();
    
    const stepDuration = '16n'; // 16th notes
    let currentStep = 0;
    
    const playStep = () => {
        if (!isPlayingDrums) {
            playDrumsBtn.textContent = 'Play Drums';
            stopVisualization();
            return;
        }
        
        // Play drums for current step
        if (currentDrumPattern.kick[currentStep]) {
            drumKit.kick.triggerAttackRelease('C1', '8n');
        }
        if (currentDrumPattern.snare[currentStep]) {
            drumKit.snare.triggerAttackRelease('8n');
        }
        if (currentDrumPattern.hihat[currentStep]) {
            drumKit.hihat.triggerAttackRelease('32n');
        }
        if (currentDrumPattern.openHihat[currentStep]) {
            drumKit.openHihat.triggerAttackRelease('16n');
        }
        
        // Visual feedback - highlight current playing column
        document.querySelectorAll('.drum-hit').forEach((hit) => {
            const stepIndex = parseInt(hit.dataset.index);
            if (stepIndex === currentStep) {
                hit.classList.add('playing');
            } else {
                hit.classList.remove('playing');
            }
        });
        
        currentStep = (currentStep + 1) % 16;
        
        setTimeout(playStep, Tone.Time(stepDuration).toMilliseconds());
    };
    
    playStep();
}

// OLD PATTERN DATA REMOVED - replaced with generateRandomDrumPattern function above

// Event listeners for bass controls
generateBassBtn.addEventListener('click', generateBassLine);
playBassBtn.addEventListener('click', playBassLine);
playTogetherBtn.addEventListener('click', playChordProgressionWithBass);

// Event listeners for drum controls
if (generateDrumsBtn) {
    generateDrumsBtn.addEventListener('click', generateDrumPattern);
}
if (playDrumsBtn) {
    playDrumsBtn.addEventListener('click', playDrumPattern);
}

// Play all (chords, bass, and drums)
async function playAll() {
    try {
        if (!currentChords || currentChords.length === 0) {
            alert('Please generate a chord progression first.');
            return;
        }
        
        if (Tone.context.state !== 'running') {
            await Tone.start();
        }
        
        if (isPlaying || isPlayingBass || isPlayingDrums) {
            // Stop everything
            isPlaying = false;
            isPlayingBass = false;
            isPlayingDrums = false;
            playAllBtn.textContent = 'Play All';
            playBtn.textContent = 'Play';
            playBassBtn.textContent = 'Play Bass';
            playDrumsBtn.textContent = 'Play Drums';
            return;
        }
        
        isPlaying = true;
        playAllBtn.textContent = 'Stop All';
        startVisualization();
        
        // Start drums if enabled
        if (drumsEnabledToggle.checked && currentDrumPattern) {
            isPlayingDrums = true;
            const stepDuration = '16n';
            let drumStep = 0;
            
            const playDrumStep = () => {
                if (!isPlayingDrums) {
                    return;
                }
                
                // Play drums for current step
                if (currentDrumPattern.kick[drumStep]) {
                    drumKit.kick.triggerAttackRelease('C1', '8n');
                }
                if (currentDrumPattern.snare[drumStep]) {
                    drumKit.snare.triggerAttackRelease('8n');
                }
                if (currentDrumPattern.hihat[drumStep]) {
                    drumKit.hihat.triggerAttackRelease('32n');
                }
                if (currentDrumPattern.openHihat[drumStep]) {
                    drumKit.openHihat.triggerAttackRelease('16n');
                }
                
                drumStep = (drumStep + 1) % 16;
                
                setTimeout(playDrumStep, Tone.Time(stepDuration).toMilliseconds());
            };
            
            playDrumStep();
        }
        
        // Play chords and bass
        let chordIndex = 0;
        
        const playNext = () => {
            if (!isPlaying) {
                // Stop everything
                isPlaying = false;
                isPlayingBass = false;
                isPlayingDrums = false;
                playAllBtn.textContent = 'Play All';
                playBtn.textContent = 'Play';
                document.querySelectorAll('.chord-item').forEach(el => {
                    el.classList.remove('playing');
                });
                document.querySelectorAll('.bass-note').forEach(el => {
                    el.classList.remove('playing');
                });
                document.querySelectorAll('.key').forEach(key => {
                    key.classList.remove('active');
                });
                return;
            }
            
            // Check if we're done with chords
            if (chordIndex >= currentChords.length) {
                if (arpeggioToggle.checked) {
                    chordIndex = 0;
                } else {
                    isPlaying = false;
                    isPlayingBass = false;
                    isPlayingDrums = false;
                    playAllBtn.textContent = 'Play All';
                    document.querySelectorAll('.chord-item').forEach(el => {
                        el.classList.remove('playing');
                    });
                    document.querySelectorAll('.bass-note').forEach(el => {
                        el.classList.remove('playing');
                    });
                    document.querySelectorAll('.key').forEach(key => {
                        key.classList.remove('active');
                    });
                    stopVisualization();
                    return;
                }
            }
            
            // Play current chord
            const chord = currentChords[chordIndex];
            const notes = chord.notes.map(note => `${note}4`);
            
            // Update chord visual feedback
            document.querySelectorAll('.chord-item').forEach(el => {
                el.classList.remove('playing');
            });
            const chordElement = document.getElementById(`chord-${chordIndex}`);
            if (chordElement) {
                chordElement.classList.add('playing');
            }
            
            // Handle chord playback
            if (arpeggioToggle.checked) {
                // Arpeggio logic
                const pattern = arpeggioType.value;
                let noteSequence = [];
                
                switch (pattern) {
                    case 'up':
                        noteSequence = [...notes];
                        break;
                    case 'down':
                        noteSequence = [...notes].reverse();
                        break;
                    case 'up-down':
                        noteSequence = [...notes, ...notes.slice(1, -1).reverse()];
                        break;
                    case 'down-up':
                        noteSequence = [...notes].reverse().concat(notes.slice(1, -1));
                        break;
                    case 'random':
                        noteSequence = [...notes].sort(() => Math.random() - 0.5);
                        break;
                    case 'chord-tone':
                        noteSequence = [notes[0], notes[2], notes[1], notes[0].slice(0, -1) + '5'];
                        break;
                    default:
                        noteSequence = [...notes];
                }
                
                const arpSpeed = 150;
                noteSequence.forEach((note, index) => {
                    setTimeout(() => {
                        if (isPlaying) {
                            synth.triggerAttackRelease(note, '8n');
                        }
                    }, index * arpSpeed);
                });
            } else {
                synth.triggerAttackRelease(notes, '2n');
                highlightKeys(chord.notes);
            }
            
            // Play bass notes if enabled
            if (bassEnabledToggle.checked && currentBassNotes.length > 0) {
                let bassDuration = 0;
                const bassPattern = bassPatternSelect.value;
                
                // Calculate bass notes for this chord
                let bassNotesForChord = [];
                if (bassPattern === 'root') {
                    bassNotesForChord = [currentBassNotes[chordIndex]];
                } else if (bassPattern === 'root-fifth' || bassPattern === 'walking') {
                    bassNotesForChord = currentBassNotes.slice(chordIndex * 2, (chordIndex + 1) * 2);
                } else if (bassPattern === 'arpeggiated') {
                    const notesPerChord = currentChords[0].notes.length;
                    bassNotesForChord = currentBassNotes.slice(chordIndex * notesPerChord, (chordIndex + 1) * notesPerChord);
                } else if (bassPattern === 'pedal') {
                    bassNotesForChord = [currentBassNotes[chordIndex]];
                }
                
                // Play bass notes
                bassNotesForChord.forEach((bassNote, i) => {
                    if (bassNote) {
                        const delay = i * Tone.Time(bassNote.duration).toMilliseconds();
                        setTimeout(() => {
                            if (isPlaying) {
                                bassSynth.triggerAttackRelease(bassNote.note, bassNote.duration);
                                
                                // Update bass visual feedback
                                document.querySelectorAll('.bass-note').forEach(el => {
                                    el.classList.remove('playing');
                                });
                                const actualBassIndex = currentBassNotes.indexOf(bassNote);
                                const bassElement = document.getElementById(`bass-${actualBassIndex}`);
                                if (bassElement) {
                                    bassElement.classList.add('playing');
                                }
                            }
                        }, delay);
                        bassDuration += Tone.Time(bassNote.duration).toMilliseconds();
                    }
                });
            }
            
            // Move to next chord
            chordIndex++;
            
            // Calculate next delay
            let nextDelay;
            if (arpeggioToggle.checked) {
                const pattern = arpeggioType.value;
                let sequenceLength = notes.length;
                if (pattern === 'up-down' || pattern === 'down-up') {
                    sequenceLength = notes.length * 2 - 2;
                } else if (pattern === 'chord-tone') {
                    sequenceLength = 4;
                }
                nextDelay = sequenceLength * 150;
            } else {
                nextDelay = 1000;
            }
            
            setTimeout(playNext, nextDelay);
        };
        
        // Start playback
        playNext();
        
    } catch (error) {
        console.error('Error playing all:', error);
        isPlaying = false;
        isPlayingBass = false;
        isPlayingDrums = false;
        playAllBtn.textContent = 'Play All';
    }
}

if (playAllBtn) {
    playAllBtn.addEventListener('click', playAll);
}
if (clearDrumsBtn) {
    clearDrumsBtn.addEventListener('click', clearDrumPattern);
}

// Waveform visualization
function drawWaveform() {
    if (!analyser) return;
    
    // Get waveform data
    waveformArray = analyser.getValue();
    
    // Fade effect
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw multiple waveforms for effect
    const colors = ['#3498db', '#2ecc71', '#e74c3c'];
    const offsets = [0, -0.02, 0.02];
    
    colors.forEach((color, index) => {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.6;
        
        const sliceWidth = canvas.width / waveformArray.length;
        let x = 0;
        
        for (let i = 0; i < waveformArray.length; i++) {
            const v = waveformArray[i] + offsets[index];
            const y = (v + 1) / 2 * canvas.height;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
            
            x += sliceWidth;
        }
        
        ctx.stroke();
    });
    
    ctx.globalAlpha = 1;
    
    // Continue animation
    animationId = requestAnimationFrame(drawWaveform);
}

function startVisualization() {
    if (!animationId) {
        drawWaveform();
    }
}

function stopVisualization() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
        // Clear canvas with fade effect
        setTimeout(() => {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }, 100);
    }
}

// Initialize on load
window.addEventListener('load', async () => {
    initCanvas();
    await initAudio();
    createKeyboard();
    
    // Also ensure audio context starts on first user interaction
    document.addEventListener('click', async () => {
        if (Tone.context.state !== 'running') {
            await Tone.start();
        }
    }, { once: true });
});
