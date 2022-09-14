show();
        function show() {
            let svgInnerHtml = '';
            for (let i = 0; i < numbers.length; i++) {
                svgInnerHtml += createBar(numbers[i], i + 1);
            }
            document.getElementById('content').innerHTML = /*HTML*/`
                <svg id="chart" width="500" height="600" viewBox="0 0 80 60">
                    ${svgInnerHtml}
                </svg><br/>
                <div>
                Valgt stolpe: <i>${chosenBar}</i>
                </div>
                <br />
                <div>
                Verdi:
                <input placeholder="Tall mellom 1-10" type="number" min="1" max="10" oninput="inputValue = this.value" />
                </div>
                <div>
                <button class="button-65 btngreen" role="button" onclick="erectBar()">Legg til stolpe</button>
                <button class="button-65 btnblue" role="button" ${buttonStatus} onclick="changeBar()">Endre valgt stolpe</button>
                <button class="button-65 btnred" role="button" ${buttonStatus} onclick="removeBar()">Fjerne valgt stolpe</button>
                </div>
                `;
        }