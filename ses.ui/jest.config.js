// const {defaults} = require('jest-config');

module.exports = {
    setupFiles: [
        "<rootDir>/utils/setup_shim.js",
        "<rootDir>/utils/setup_enzyme.js"
    ],
    moduleFileExtensions: [
            "ts",
            "tsx",
            "js",
            "jsx",
            "json",
            "node"
          ],
    preset: "ts-jest/presets/js-with-ts",
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/setup/fileMock.js",
        "\\.(css|less)$": "<rootDir>/tests/setup/styleMock.js"
      },
    moduleDirectories: [
        "node_modules",
        "src"
    ],
    testMatch: [
        "**/tests/**/*.test.(ts|tsx|js)"
      ],
    collectCoverage: true
    //    "rootDir": "",
    //   "transform": {
    //     "^.+\\.(ts|tsx)?$": "ts-jest"
    //   },
    //   "testRegex": "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
    //   "moduleFileExtensions": [
    //     "ts",
    //     "tsx",
    //     "js",
    //     "jsx",
    //     "json",
    //     "node"
    //   ],
    //   "snapshotSerializers": ["enzyme-to-json/serializer"],
    //   "setupFilesAfterEnv":  [
    //     "<rootDir>/setup/setup_enzyme.js"
    //     ],
};
