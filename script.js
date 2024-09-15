// submitting form...
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
(_a = document
    .getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var instituteElement = document.getElementById("institute");
    var degreeElement = document.getElementById("degree");
    var completionElement = document.getElementById("completion");
    var jobTitleElement = document.getElementById("jobTitle");
    var companyElement = document.getElementById("company");
    var workDatesElement = document.getElementById("workDates");
    var jobDescriptionElement = document.getElementById("jobDescription");
    var skillsElement = document.getElementById("skills");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        addressElement &&
        instituteElement &&
        degreeElement &&
        completionElement &&
        jobTitleElement &&
        companyElement &&
        workDatesElement &&
        jobDescriptionElement &&
        skillsElement) {
        var name_1 = nameElement.value.trim();
        var email = emailElement.value.trim();
        var phone = phoneElement.value.trim();
        var address = addressElement.value.trim();
        var institute = instituteElement.value.trim();
        var degree = degreeElement.value.trim();
        var completion = completionElement.value.trim();
        var jobTitle = jobTitleElement.value.trim();
        var company = companyElement.value.trim();
        var workDates = workDatesElement.value.trim();
        var jobDescription = jobDescriptionElement.value.trim();
        var skills = skillsElement.value.trim();
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureUrl = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        // Resume Output....
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureUrl
            ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"Profile Picture\" class=\"profilePicture\">")
            : "", "\n            <p><strong>Name:</strong> <span id=\"editName\" contenteditable=\"true\">").concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span id=\"editEmail\" contenteditable=\"true\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span id=\"editPhone\" contenteditable=\"true\">").concat(phone, "</span></p>\n            <p><strong>Address:</strong> <span id=\"editAddress\" contenteditable=\"true\">").concat(address, "</span></p>\n            <h3>Education</h3>\n            <p><strong>Institute:</strong> <span id=\"editInstitute\" contenteditable=\"true\">").concat(institute, "</span></p>\n            <p><strong>Degree:</strong> <span id=\"editDegree\" contenteditable=\"true\">").concat(degree, "</span></p>\n            <p><strong>Completion:</strong> <span id=\"editCompletion\" contenteditable=\"true\">").concat(completion, "</span></p>\n            <h3>Experience</h3>\n            <p><strong>Job-Title:</strong> <span id=\"editJobTitle\" contenteditable=\"true\">").concat(jobTitle, "</span></p>\n            <p><strong>Company:</strong> <span id=\"editCompany\" contenteditable=\"true\">").concat(company, "</span></p>\n            <p><strong>WorkDates:</strong> <span id=\"editWorkDates\" contenteditable=\"true\">").concat(workDates, "</span></p>\n            <p><strong>Job-Description:</strong> <span id=\"editJobDescription\" contenteditable=\"true\">").concat(jobDescription, "</span></p>\n            <h3>Skills</h3>\n            <p><strong>Skills:</strong> <span id=\"editSkills\" contenteditable=\"true\">").concat(skills, "</span></p>\n        ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");
            var buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);
            // Download as PDF
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            // Adding the CSS class to the button....
            downloadButton.classList.add("download-btn");
            downloadButton.addEventListener("click", function () {
                window.print(); // Adjust this as needed for more refined printing
            });
            buttonsContainer.appendChild(downloadButton);
            // Shareable link button.
            // Create the shareable link button...
            var shareableLinkButton = document.createElement("button");
            shareableLinkButton.textContent = "Copy Shareable Link";
            shareableLinkButton.classList.add("shareable-link-btn");
            // Listen for the click event
            shareableLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var nameInput, name_2, randomString, origin_1, path, shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            nameInput = document.getElementById("nameInput");
                            // If the element does not exist, show an error and return early
                            if (!nameInput) {
                                alert("Name input element not found");
                                return [2 /*return*/]; // Exit if the element is not found
                            }
                            name_2 = nameInput.value.trim();
                            // Ensure the name is not empty.
                            if (!name_2) {
                                alert("Please enter a name");
                                return [2 /*return*/]; // Exit if no name is provided
                            }
                            randomString = Math.random().toString(36).substring(2, 10);
                            origin_1 = window.location.origin;
                            path = "/index.html";
                            shareableLink = "".concat(origin_1).concat(path, "?user=").concat(encodeURIComponent(name_2), "&id=").concat(randomString);
                            // Copy the shareable link to the clipboard
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            // Copy the shareable link to the clipboard
                            _a.sent();
                            alert("Shareable link copied: ".concat(shareableLink));
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("Error: Failed to copy", err_1);
                            alert("Failed to copy link to clipboard");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            // Append the button to the container
            var actionButtonsContainer = document.getElementById("actionButtons");
            if (actionButtonsContainer) {
                actionButtonsContainer.appendChild(shareableLinkButton);
            }
            else {
                console.error("Action buttons container not found");
            }
            buttonsContainer.appendChild(shareableLinkButton);
        }
    }
});
