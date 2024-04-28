let startIndex = 0;
const batchSize = 100;

fetch("thirukkural.json")
    .then(response => response.json())
    .then(data => {
        const kuralCollection = data.kural;

        const loadKurrals = () => {
            for (let i = startIndex; i < Math.min(startIndex + batchSize, kuralCollection.length); i++) {
                const kuralCollectionDiv = document.createElement("div");
                kuralCollectionDiv.setAttribute("class", "kuralCollectionDiv");

                const kuralNumber = document.createElement("h6");
                kuralNumber.textContent = `Kural Number : ${kuralCollection[i].Number}`;
                kuralCollectionDiv.appendChild(kuralNumber);

                const kuralLineDiv = document.createElement("div");
                kuralLineDiv.setAttribute("class", "kuralLineDiv");
                kuralCollectionDiv.appendChild(kuralLineDiv);

                const kuralLine1 = document.createElement("h3");
                kuralLine1.textContent = `${kuralCollection[i].Line1}`;
                kuralLineDiv.appendChild(kuralLine1);

                const kuralLine2 = document.createElement("h3");
                kuralLine2.textContent = `${kuralCollection[i].Line2}`;
                kuralLineDiv.appendChild(kuralLine2);

                document.getElementById("kuralContainer").appendChild(kuralCollectionDiv);
            }
            startIndex += batchSize;
        };

        loadKurrals();

        const loadMoreButton = document.createElement("button");
        loadMoreButton.textContent = "Load More";
        loadMoreButton.addEventListener("click", loadKurrals);
        document.body.appendChild(loadMoreButton);
    });




