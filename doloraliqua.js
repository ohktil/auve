class DataModel {
    constructor(encoding) {
        this.encoding = encoding;
    }

    // Method to check if a certain channel is present in the encoding
    channelHasField(encoding, channel) {
        return encoding.hasOwnProperty(channel);
    }

    // Example method using channelHasField
    hasChannel(channel) {
        return this.channelHasField(this.encoding, channel);
    }
}

// Example usage
const encoding = {
    x: { field: 'height', type: 'quantitative' },
    y: { field: 'weight', type: 'quantitative' }
};

const model = new DataModel(encoding);

console.log(model.hasChannel('x')); // Output: true
console.log(model.hasChannel('color')); // Output: false
