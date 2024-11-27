
// // script.js

//   function saveData() {
//     const year = document.getElementById("currentYear").value;
//     const term = document.getElementById("currentTerm").value;
//     const currentGPA = document.getElementById("currentGPA").value;
//     const targetGPA = document.getElementById("targetGPA").value;

//     fetch("save_grade.php", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: `year=${year}&term=${term}&currentGPA=${currentGPA}&targetGPA=${targetGPA}`
//     })
//     .then(response => response.text())
//     .then(data => {
//         console.log(data); // Check the response from PHP
//         document.getElementById("result").innerText = data;
//     })
//     .catch(error => console.error("Error:", error));
    
//     }

// // Get the modal and trigger elements
// const popup = document.getElementById("popup");
// const openPopup = document.getElementById("openPopup");
// const closePopup = document.getElementById("closePopup");

// // Open the pop-up when the "openPopup" element is clicked
// openPopup.onclick = function() {
//   popup.style.display = "block";
// }

// // Close the pop-up when the 'x' is clicked
// closePopup.onclick = function() {
//   popup.style.display = "none";
// }

// // Close the pop-up when clicking outside the modal content
// window.onclick = function(event) {
//   if (event.target == popup) {
//     popup.style.display = "none";
//   }
// }

// function openTab(event, tabName) {
//     // Hide all tab contents
//     const tabContent = document.getElementsByClassName("tab-content");
//     for (let i = 0; i < tabContent.length; i++) {
//         tabContent[i].style.display = "none";
//     }

//     // Remove "active" class from all tab buttons
//     const tabButtons = document.getElementsByClassName("tab-button");
//     for (let i = 0; i < tabButtons.length; i++) {
//         tabButtons[i].classList.remove("active");
//     }

//     // Show the selected tab content and add "active" class to the clicked tab button
//     document.getElementById(tabName).style.display = "block";
//     event.currentTarget.classList.add("active");
// }

// // Display the first tab by default on page load
// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector(".tab-button").click();
// });

// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     // Display a thank you message
//     const contactMessage = document.getElementById("contactMessage");
//     contactMessage.textContent = "Thank you for reaching out! We'll get back to you soon.";

//     // Clear the form
//     this.reset();
// });

// let tabs = document.querySelectorAll(".tabs h3");
// let tabContents = document.querySelectorAll(".tab-content div");

// tabs.forEach((tab, index) => {
//   tab.addEventListener("click", () => {
//     tabContents.forEach((content) => {
//       content.classList.remove("active");
//     });
//     tabs.forEach((tab) => {
//       tab.classList.remove("active");
//     });
//     tabContents[index].classList.add("active");
//     tabs[index].classList.add("active");
//   });
// });

function calculateRequiredGrade() {
    const currentGPA = parseFloat(document.getElementById('currentGPA').value);
    const targetGPA = parseFloat(document.getElementById('targetGPA').value);
    const currentYear = parseInt(document.getElementById('currentYear').value);
    const currentTerm = parseInt(document.getElementById('currentTerm').value);
  
    if (isNaN(currentGPA) || isNaN(targetGPA) || isNaN(currentYear) || isNaN(currentTerm)) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
    }
  
    if (currentGPA < 0 || currentGPA > 4 || targetGPA < 0 || targetGPA > 4) {
        alert("เกรดสะสมและเกรดที่ต้องการต้องอยู่ในช่วง 0.00-4.00");
        return;
    }
  
    const completedSemesters = (currentYear - 1) * 2 + currentTerm;
    const requiredTotalGPA = (targetGPA * (completedSemesters + 1)) - (currentGPA * completedSemesters);
  
    let resultText;
    if (requiredTotalGPA <= 4.0) {
        resultText = `เพื่อที่จะได้เกรดเฉลี่ย ${targetGPA} คุณต้องทำเกรดเฉลี่ย ${requiredTotalGPA.toFixed(2)} ในเทอมถัดไป`;
    } else {
        resultText = `อาจจะไม่ถึงเป้าหมายที่ต้องการ<br>
        แต่พยายามเท่าที่ไหว ไม่ต้องกดดันมากจนเกินไปนะ<br>
        `;
    }
    document.getElementById('result').innerHTML = resultText;
  }

document.addEventListener("DOMContentLoaded", () => {
    // Main tab functionality
    const tabs = document.querySelectorAll(".tabs h3");
    const tabContents = document.querySelectorAll(".tab-content > div");
  
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        // Remove active classes
        document.querySelector(".tabs h3.active").classList.remove("active");
        document.querySelector(".tab-content > div.active").classList.remove("active");
  
        // Add active classes to the clicked tab and corresponding content
        tab.classList.add("active");
        tabContents[index].classList.add("active");
  
        // Reset nested tabs to the default active one (if present)
        const nestedTabs = tabContents[index].querySelectorAll(".nested-tabs h4");
        const nestedContents = tabContents[index].querySelectorAll(".nested-tab-content > div");
        if (nestedTabs.length && nestedContents.length) {
          nestedTabs.forEach((nt) => nt.classList.remove("active"));
          nestedContents.forEach((nc) => nc.classList.remove("active"));
          
          // Set the first nested tab and content as active
          nestedTabs[0].classList.add("active");
          nestedContents[0].classList.add("active");
        }
      });
    });
  
    // Nested tab functionality
    const nestedTabContainers = document.querySelectorAll(".nested-tabs");
  
    nestedTabContainers.forEach((nestedContainer) => {
      const nestedTabs = nestedContainer.querySelectorAll("h4");
      const nestedContents = nestedContainer.nextElementSibling.querySelectorAll("div");
  
      nestedTabs.forEach((nestedTab, index) => {
        nestedTab.addEventListener("click", () => {
          // Remove active classes for nested tabs and contents
          nestedContainer.querySelector("h4.active").classList.remove("active");
          nestedContainer.nextElementSibling.querySelector("div.active").classList.remove("active");
  
          // Set active class on the clicked nested tab and corresponding content
          nestedTab.classList.add("active");
          nestedContents[index].classList.add("active");
        });
      });
    });
  });
  
  