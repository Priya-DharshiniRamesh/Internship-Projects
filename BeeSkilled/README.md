# BeeSkilled – Data Science Internship

A collection of the tasks, practice exercises, study materials, datasets, and projects completed during my **Data Science Internship at BeeSkilled**.

**Author:** Priya Dharshini R  
**Course:** B.Tech Artificial Intelligence and Data Science

## Internship Overview

During this internship, I worked on weekly Data Science tasks and practical exercises using Python, datasets, and Jupyter Notebooks.

The internship helped me gain practical experience in data analysis, data cleaning, data visualization, exploratory data analysis, and introductory machine learning.

## Repository Structure

```text
BeeSkilled/
├── study material/          # Study materials and practice set
├── week1/                   # Student marks analysis
├── week 2/                  # COVID-19 EDA and visualization practice
├── week 3/                  # Student performance prediction and EDA practice
├── week 4/                  # Titanic analysis, report, and ML practice
└── README.md
```

Each week folder contains the relevant task brief, practice materials, datasets, and completed Jupyter Notebooks.

## Weekly Work

### Week 1 – Python for Data Science Basics

* Project: Analyze Student Marks Dataset (`StudentsPerformance.csv`)
* Loaded the dataset and inspected its shape, columns, and data types
* Checked for missing values and cleaned the data
* Calculated the average, maximum, and minimum math, reading, and writing scores using Pandas and NumPy
* Worked with Data Science study materials and practice exercises

### Week 2 – Data Visualization

* Project: Exploratory Data Analysis on the COVID-19 dataset
* Plotted the trend of total cases over time
* Compared the top 5 countries by total cases
* Created a heatmap and a scatter plot of cases vs. deaths
* Completed practice exercises using bar charts, pie charts, histograms, correlation heatmaps, and multiple line graphs
* Used Matplotlib, Seaborn, and Plotly for data visualization

### Week 3 – Machine Learning Introduction

* Project: Predict Student Performance using `Student_Performance.csv`
* Trained a Linear Regression model using Scikit-Learn with an 80/20 train-test split
* Evaluated the model using R² score and Mean Absolute Error (MAE)
* Obtained an R² score of approximately 0.99
* Plotted actual vs. predicted values
* Completed practice exercises involving dataset shape and null checks, outlier detection using the IQR method, removing unimportant columns, and correlation analysis

### Week 4 – Titanic Data Analysis

* Project: Titanic Survival Analysis using `Titanic-Dataset.csv`
* Performed data cleaning and handled missing values
* Analyzed survival based on gender, passenger class, age, fare, and embarkation port
* Performed correlation analysis and data visualization
* Prepared a Titanic Data Analysis report in PDF format
* Completed practice exercises involving Linear Regression for sales prediction and Logistic Regression for Pass/Fail classification
* Evaluated models using accuracy and created predicted vs. actual plots

## Tools and Technologies

* Python
* Jupyter Notebook
* Google Colab
* Pandas
* NumPy
* Matplotlib
* Seaborn
* Plotly
* Scikit-Learn
* CSV Datasets

## Skills Demonstrated

* Data cleaning and preprocessing
* Exploratory Data Analysis (EDA)
* Data visualization
* Outlier detection
* Correlation analysis
* Linear Regression
* Logistic Regression
* Model evaluation using R², MAE, and accuracy
* Python programming
* Working with Jupyter Notebooks
* Interpreting data and generating insights

## How to Run

1. Install the required Python libraries:

```bash
pip install pandas numpy matplotlib seaborn plotly scikit-learn jupyter
```

2. Open any notebook using Jupyter Notebook, JupyterLab, or Google Colab.

**Notes:**

* Some notebooks were developed in Google Colab and use file paths such as `/content/sample_data/`. To run them locally, update the file path in `pd.read_csv(...)` to point to the corresponding CSV file in the week folder.
* The Week 4 Titanic notebook imports `google.colab.files`. Remove or comment out that line when running outside Colab.
* The Week 2 notebook loads the COVID-19 dataset from an online source, so an internet connection is required.
* Make sure the datasets (`StudentsPerformance.csv`, `Student_Performance.csv`, `Titanic-Dataset.csv`) are present in the repository.

## Internship Learning

Through the BeeSkilled internship, I gained practical experience in applying Python and Data Science concepts to datasets, from cleaning and visualizing data to building and evaluating introductory machine learning models.

## Acknowledgements

These tasks and projects were completed as part of my **Data Science Internship at BeeSkilled**.
