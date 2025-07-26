#!/usr/bin/env node

// Simple test runner for chord generation tests
const fs = require('fs');

// Read and execute the test file
try {
    const testCode = fs.readFileSync('./chord-tests.js', 'utf8');
    
    console.log('=================================');
    console.log('Chord Generator Unit Tests');
    console.log('=================================');
    
    // Execute the tests
    eval(testCode);
    
    console.log('\n=================================');
    console.log('Tests completed!');
    console.log('=================================');
} catch (error) {
    console.error('Error running tests:', error);
    process.exit(1);
}