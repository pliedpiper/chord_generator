// Chord Generation Tests
// This file contains unit tests for the chord generation logic

// Import music theory constants
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const MAJOR_SCALE_PATTERN = [0, 2, 4, 5, 7, 9, 11];
const MINOR_SCALE_PATTERN = [0, 2, 3, 5, 7, 8, 10];

const CHORD_TYPES = {
    major: {
        'I': [0, 4, 7],
        'ii': [2, 5, 9],
        'iii': [4, 7, 11],
        'IV': [5, 9, 0],
        'V': [7, 11, 2],
        'vi': [9, 0, 4],
        'vii°': [11, 2, 5]
    },
    minor: {
        'i': [0, 3, 7],
        'ii°': [2, 5, 8],
        'III': [3, 7, 10],
        'iv': [5, 8, 0],
        'v': [7, 10, 2],
        'VI': [8, 0, 3],
        'VII': [10, 2, 5]
    }
};

// Helper functions
function getScale(key, mode) {
    const rootIndex = NOTES.indexOf(key);
    const pattern = mode === 'major' ? MAJOR_SCALE_PATTERN : MINOR_SCALE_PATTERN;
    
    return pattern.map(interval => {
        const noteIndex = (rootIndex + interval) % 12;
        return NOTES[noteIndex];
    });
}

function getChordNotes(degree, scale, mode) {
    const intervals = CHORD_TYPES[mode][degree];
    return intervals.map(interval => scale[interval % scale.length]);
}

// Test specific chord progressions
function testChordProgression() {
    const testCases = [
        {
            key: 'C',
            mode: 'major',
            progression: ['I', 'IV', 'V', 'I'],
            expected: [
                ['C', 'E', 'G'],
                ['F', 'A', 'C'],
                ['G', 'B', 'D'],
                ['C', 'E', 'G']
            ]
        },
        {
            key: 'A',
            mode: 'minor',
            progression: ['i', 'iv', 'v', 'i'],
            expected: [
                ['A', 'C', 'E'],
                ['D', 'F', 'A'],
                ['E', 'G', 'B'],
                ['A', 'C', 'E']
            ]
        },
        {
            key: 'G',
            mode: 'major',
            progression: ['I', 'vi', 'IV', 'V'],
            expected: [
                ['G', 'B', 'D'],
                ['E', 'G', 'B'],
                ['C', 'E', 'G'],
                ['D', 'F#', 'A']
            ]
        }
    ];

    console.log('Chord Progression Tests:');
    testCases.forEach(testCase => {
        console.log(`\nTesting ${testCase.key} ${testCase.mode} - ${testCase.progression.join('-')}`);
        const scale = getScale(testCase.key, testCase.mode);
        console.log(`Scale: ${scale.join(', ')}`);
        
        testCase.progression.forEach((degree, index) => {
            const chordNotes = getChordNotes(degree, scale, testCase.mode);
            const expected = testCase.expected[index];
            const passed = JSON.stringify(chordNotes) === JSON.stringify(expected);
            
            console.log(`${degree} chord: ${chordNotes.join('-')} ${passed ? '✓' : '✗'}`);
            if (!passed) {
                console.log(`  Expected: ${expected.join('-')}`);
            }
        });
    });
}

// Test chord intervals
function testChordIntervals() {
    console.log('\n\nChord Interval Tests:');
    
    // Test major triads (should have major 3rd + minor 3rd)
    console.log('\nMajor Chord Intervals:');
    ['I', 'IV', 'V'].forEach(degree => {
        const intervals = CHORD_TYPES.major[degree];
        const root = intervals[0];
        const third = intervals[1];
        const fifth = intervals[2];
        
        // Calculate semitone differences
        const majorThird = (third - root + 12) % 12;
        const perfectFifth = (fifth - root + 12) % 12;
        
        console.log(`${degree}: Root-3rd = ${majorThird} semitones, Root-5th = ${perfectFifth} semitones`);
        console.log(`  ${majorThird === 4 ? '✓' : '✗'} Major 3rd (4 semitones)`);
        console.log(`  ${perfectFifth === 7 ? '✓' : '✗'} Perfect 5th (7 semitones)`);
    });
    
    // Test minor triads (should have minor 3rd + major 3rd)
    console.log('\nMinor Chord Intervals:');
    ['ii', 'iii', 'vi'].forEach(degree => {
        const intervals = CHORD_TYPES.major[degree];
        const root = intervals[0];
        const third = intervals[1];
        const fifth = intervals[2];
        
        // Calculate semitone differences
        const minorThird = (third - root + 12) % 12;
        const perfectFifth = (fifth - root + 12) % 12;
        
        console.log(`${degree}: Root-3rd = ${minorThird} semitones, Root-5th = ${perfectFifth} semitones`);
        console.log(`  ${minorThird === 3 ? '✓' : '✗'} Minor 3rd (3 semitones)`);
        console.log(`  ${perfectFifth === 7 ? '✓' : '✗'} Perfect 5th (7 semitones)`);
    });
}

// Test all keys
function testAllKeys() {
    console.log('\n\nTesting All Keys:');
    let allPassed = true;
    
    NOTES.forEach(key => {
        ['major', 'minor'].forEach(mode => {
            const scale = getScale(key, mode);
            const chordDegrees = Object.keys(CHORD_TYPES[mode]);
            
            chordDegrees.forEach(degree => {
                const chordNotes = getChordNotes(degree, scale, mode);
                
                // Verify all chord notes are in the scale
                const allNotesInScale = chordNotes.every(note => scale.includes(note));
                if (!allNotesInScale) {
                    console.log(`✗ ${key} ${mode} ${degree}: Notes ${chordNotes.join('-')} not all in scale ${scale.join('-')}`);
                    allPassed = false;
                }
            });
        });
    });
    
    if (allPassed) {
        console.log('✓ All chord notes are correctly within their respective scales!');
    }
}

// Run all tests
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { testChordProgression, testChordIntervals, testAllKeys };
} else {
    // Run tests if loaded in browser
    testChordProgression();
    testChordIntervals();
    testAllKeys();
}