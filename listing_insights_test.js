const baseUrl = 'https://develop.soona.co';
var pollCount = 0;
const amazonSpell = 'hD-1jl0MbCkh9O15fU9iN';
const shopifySpell = 'JFh3FTR4VW481NbPyXmH0';
//functions
async function getIndustryFromURL(url) {
  if (url === undefined || url === null || url === '') { return; }
  if (!url.includes('http')) {
    url = `https://${url}`;
  }
  let spellInput = { input: url };
  if (url.includes('amazon')) {
    await castSpell(amazonSpell, spellInput);
  } else if (url.includes('shopify')) {
    await castSpell(shopifySpell, spellInput);
  } else {
    spellInput = { input: `${url}.myshopify.com`}
    await castSpell(shopifySpell, spellInput);
  }
}

async function castSpell(spellId, spellInputs) {
  const url = `${baseUrl}/api/predictions`;
  const payload = {
    generate: {
      provider: "respell",
      payload: {
        spellId: spellId,
        inputs: spellInputs,
      },
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Sorry, something went wrong. Please try again.");
    }

    const responseData = await response.json();

    if (responseData.provider_job_id) {
      pollStatus(responseData.provider_job_id);
    }
  } catch (error) {
    console.error(error);
  }
}

async function pollStatus(jobId) {
  const url = `${baseUrl}/api/predictions/${jobId}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "complete" && pollCount < 20) {
      pollCount++;
      setTimeout(() => pollStatus(jobId), 3000);
    } else if (data.status === "complete" && data.outputs.description) {
      updateProductDescription(data.outputs.description);
      resetPollCount();
    } else {
      throw new Error("Sorry, something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);

    resetPollCount();
  }
}

function resetPollCount() {
  pollCount = 0;
}

document.addEventListener('DOMContentLoaded', function () {
  let urlInput = document.getElementById('shop-URL');
  let submitButton = document.querySelectorAll('input[type=button]')[0];

  submitButton.addEventListener('click', async () => {
    if (urlInput.value == '') { return; }
    let industry = await getIndustryFromURL(urlInput.value);

  });
  
});