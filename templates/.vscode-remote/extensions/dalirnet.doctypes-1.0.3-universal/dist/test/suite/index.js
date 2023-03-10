"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const Mocha = require("mocha");
const path_1 = require("path");
/**
 * Exporting a function called run.
 *
 * @function
 * @name run
 * @kind variable
 * @returns {Promise<any>}
 * @exports
 */
const run = () => {
    /**
     * Creating a new instance of the Mocha class.
     *
     * @constant
     * @name mocha
     * @kind variable
     * @memberof run
     * @instance
     * @type {Mocha}
     */
    const mocha = new Mocha({
        /**
         * Setting the interface to use.
         *
         * @property
         * @name ui
         * @kind property
         * @memberof run.mocha
         * @type {keyof Mocha.InterfaceContributions}
         */
        ui: "tdd",
        /**
         * Making sure that all tests are asynchronous.
         *
         * @property
         * @name asyncOnly
         * @kind property
         * @memberof run.mocha
         * @type {boolean}
         */
        asyncOnly: true,
        /**
         * Setting the timeout for the tests to 60 seconds.
         *
         * @property
         * @name timeout
         * @kind property
         * @memberof run.mocha
         * @type {string | number}
         */
        timeout: 60000,
        /**
         * Setting the reporter to use.
         *
         * @property
         * @name reporter
         * @kind property
         * @memberof run.mocha
         * @type {string | Mocha.ReporterConstructor}
         */
        reporter: "spec",
        /**
         * Setting the color property to true.
         *
         * @property
         * @name color
         * @kind property
         * @memberof run.mocha
         * @type {boolean}
         */
        color: true,
    });
    return new Promise((success, fail) => {
        /**
         * Adding the file to the mocha instance and running it.
         *
         * @constant
         * @name mocha
         * @type {Mocha}
         */
        mocha.addFile((0, path_1.resolve)(__dirname, "../suite/extension.spec.js")).run((failures) => {
            if (!failures) {
                success();
            }
            else {
                fail();
            }
        });
    });
};
exports.run = run;
//# sourceMappingURL=index.js.map