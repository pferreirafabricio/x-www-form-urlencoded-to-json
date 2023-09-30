document.addEventListener("DOMContentLoaded", function () {
  const outputElement = document.getElementById("output");
  const inputElement = document.getElementById("input");
  const convertButton = document.getElementById("convert");

  convertButton.addEventListener("click", () => {
    const input = inputElement.value;
    const output = convertToJson(input);
    outputElement.innerHTML = output;
  });
});

/**
 * @link https://stackoverflow.com/a/65512971/12542704
 * @param {string} value
 * @returns {string}
 */
function convertToJson(value) {
  return JSON.stringify(
    Object.fromEntries(
      value
        .trim()
        .split("&")
        .map((s) => s.split("="))
        .map((pair) => pair.map(decodeURIComponent))
    ),
    undefined,
    2
  );
}

/**
 * @link https://community.broadcom.com/enterprisesoftware/communities/community-home/digestviewer/viewthread?GroupId=1255&MessageKey=417be054-5933-4f1f-b237-b3bca4570ae0&CommunityKey=0f580f5f-30a4-41de-a75c-e5f433325a18&tab=digestviewer
 * @param {string} value
 * @returns {string}
 */
function simpleConvert(value) {
  return '{"' + value.replaceAll("&", '", "').replaceAll("=", '": "') + '"}';
}
