const convert = (rom) => {
    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;

    for (let i = 0; i < rom.length; i++) {
        const cur = sym[rom[i]];
        const next = sym[rom[i + 1]];

        if (cur < next) {
            result += next - cur;
            i++
        } else {
            result += cur
        }
    }
    console.log(result);
}

convert('XVI');