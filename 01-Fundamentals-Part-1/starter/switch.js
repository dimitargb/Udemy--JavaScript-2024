const day = "monday";

switch (day) {
  case "monday": // day === monday
    console.log("Plan course");
    console.log("Go to coding meet up");
    break;
  case "tuesday":
    console.log("Prepare theory videos.");
    break;
  case "wendnesday":
  case "thursday":
    console.log("Writing code exsamples");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday")
  console.log("Plan course"), console.log("Go to coding meet up");
else if (day === "tuesday") console.log("Prepare theory videos");
else if (day === "wendnesday" || day === "thursday")
  console.log("Writing code exsamples");
else console.log("This is not a valid day");
