# Boston Public Salaries Data - Web Application

This web application processes and displays public salary data for Boston employees. Users can view the top five earners in the city and filter out employees who make more than $200,000 annually. The data is provided in JSON format, already converted into an array for easy manipulation using JavaScript.

## Project Structure

- `data.js`: Contains Boston employees' salary data in JSON format. The data is structured as an array, with each employee's name and salary at index positions 8 and 11, respectively.
- `index.html`: The main HTML file serving as the application interface. This file should not be edited directly.
- `walkboston.js`: Contains the JavaScript logic to process and display the top five earners and employees making more than $200,000.

## Functionality

### 1. Display Top Five Earners

The application identifies and displays the top five income earners among Boston employees.

Key Points:

- Employee names and salaries are extracted from the array.
- Salaries are compared using the `array.sort()` method.
- Top five earners are displayed in an HTML element with the ID `topSalaries`.

### 2. Display Employees Earning Over $200,000

The application filters and displays all employees with an annual salary exceeding $200,000.

Key Points:

- The data is filtered using the `array.filter()` method.
- Results are displayed in an HTML element with the ID `overPaid`.

## Setup and Usage

1. Clone the repository to your local machine.
2. Open `index.html` in a web browser to view the application.
3. The top five earners and employees making over $200,000 will be displayed automatically.

## Development

To modify or extend the application:

1. Edit `walkboston.js` to change data processing or display logic.
2. Ensure any new data is added to `data.js` in the correct format.
3. Avoid directly editing `index.html`; instead, use JavaScript to manipulate the DOM.

## Contributing

Contributions to improve the application are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes.
4. Push to the branch.
5. Create a new Pull Request.

## License

MIT License

## Contact

Rodrigo Ochoa Mayagoitia
mayagoitiaro@gmail.com
