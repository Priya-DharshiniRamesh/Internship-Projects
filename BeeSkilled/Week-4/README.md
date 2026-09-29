# Week 4 – Data Analysis Project & Machine Learning with Python

**BeeSkilled – Data Science Internship**

**Author:** Priya Dharshini R  
**Course:** B.Tech Artificial Intelligence and Data Science

## Overview

Week 4 has two parts:

1. **Project:** a data analysis of the Titanic dataset to find survival insights, submitted as a Python notebook plus a short PDF report.
2. **Practice set:** Machine Learning with Python, covering Linear Regression, Logistic Regression and model evaluation.

## Folder Structure

```text
week 4/
├── Week4/
│   ├── Week4_Titanic_Data_Analysis.ipynb   # Project: Titanic survival analysis
│   ├── Week4_Practice_.ipynb               # Practice set solutions
│   ├── Titanic_Analysis_Report.pdf         # Project report
│   └── Titanic-Dataset.csv                 # Dataset
├── week-4_data science.pdf                 # Project brief
└── practice set.pdf                        # Practice questions
```

## Project: Titanic Survival Analysis

**Objective:** Analyze the Titanic dataset and find survival insights.

**Deliverables:** Python notebook with code and a short project report (PDF).

### Dataset

**File:** `Titanic-Dataset.csv`  
**Size:** 891 passengers, 12 columns

| Column | Description |
|--------|-------------|
| PassengerId | Unique passenger ID |
| Survived | 0 = did not survive, 1 = survived |
| Pclass | Passenger class (1, 2 or 3) |
| Name | Passenger name |
| Sex | Male / female |
| Age | Age in years |
| SibSp | Number of siblings / spouses aboard |
| Parch | Number of parents / children aboard |
| Ticket | Ticket number |
| Fare | Fare paid |
| Cabin | Cabin number |
| Embarked | Port of embarkation (C, Q, S) |

### Steps

1. Loaded the dataset and inspected it using `head()`, `info()` and `describe()`
2. **Data cleaning:**
   - `Age` had 177 missing values, filled with the median age
   - `Embarked` had 2 missing values, filled with the most common port (mode)
   - `Cabin` had 687 missing values (about 77%), so the column was dropped
3. Analyzed overall survival
4. Compared survival by gender and by passenger class
5. Analyzed the age distribution and compared age and fare between survivors and non-survivors
6. Compared survival by port of embarkation
7. Plotted a correlation heatmap of the numerical columns

### Key Findings

| Finding | Result |
|---------|--------|
| Overall survival | 342 survived, 549 did not (≈ 38.4% survival rate) |
| Female passengers | ≈ 74.2% survived |
| Male passengers | ≈ 18.9% survived |
| 1st class | ≈ 63.0% survived |
| 2nd class | ≈ 47.3% survived |
| 3rd class | ≈ 24.2% survived |

- **Gender** showed the largest difference in survival rate.
- **Passenger class** was also strongly associated with survival. Higher classes had higher survival rates.
- **Age:** most passengers were between about 20 and 40 years old, and the age distribution differed between survivors and non-survivors.
- **Fare:** survivors generally paid higher fares, consistent with the link between fare and passenger class.
- **Embarkation port:** passengers who boarded at Cherbourg (C) had a higher survival rate than those from Southampton (S) or Queenstown (Q).
- **Correlation:** Survived was negatively correlated with Pclass (survival fell as the class number rose) and positively correlated with Fare.

These are associations found in the dataset. They do not by themselves establish the causes of the differences.

## Practice Set: Machine Learning with Python

Notebook: `Week4_Practice_.ipynb`  
Topics: Linear & Logistic Regression, Model Accuracy and Evaluation.

| # | Question | Approach | Result |
|---|----------|----------|--------|
| 1 | Build linear regression for sales prediction | `LinearRegression` on Advertising vs Sales (10 sample records) | Coefficient ≈ 0.87, Intercept ≈ 17.67 |
| 2 | Train logistic regression to classify pass/fail students | `LogisticRegression` on Study Hours and Attendance (10 sample records) | Predicted Pass/Fail for each student |
| 3 | Evaluate accuracy using `sklearn.metrics` | `accuracy_score` on the logistic regression predictions | Accuracy = 1.0 (100%) |
| 4 | Plot predicted vs actual values | Scatter plot of actual vs predicted sales with a reference line | Predictions follow the actual values closely |

**Note:** The practice questions use small hand-made sample datasets, so they demonstrate the workflow rather than real-world performance. The 100% accuracy is measured on the same 10 records used for training.

## Tools and Libraries

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Scikit-Learn
- Jupyter Notebook / Google Colab

## How to Run

1. Install the required libraries:

```bash
pip install pandas numpy matplotlib seaborn scikit-learn jupyter
```

2. Open `Week4_Titanic_Data_Analysis.ipynb` or `Week4_Practice_.ipynb` in Jupyter Notebook, JupyterLab or Google Colab.

**Note:** The Titanic notebook was written in Google Colab. It includes a cell (`files.upload()`) that asks you to upload `Titanic-Dataset.csv`. To run it locally, skip or remove that cell and make sure `Titanic-Dataset.csv` is in the same folder as the notebook. The practice notebook does not need any dataset file.

## Skills Demonstrated

- Data cleaning and handling missing values
- Exploratory data analysis and visualization
- Group-wise survival analysis
- Correlation analysis
- Building Linear and Logistic Regression models with Scikit-Learn
- Model evaluation using `accuracy_score`
- Plotting predicted vs actual values
- Writing a short analysis report

## Conclusion

This week combined a complete data analysis workflow with an introduction to regression and classification. The Titanic project covered loading a real-world dataset, cleaning missing data, exploring it with visualizations and identifying that survival was strongly associated with gender and passenger class, with further patterns in age, fare and embarkation port. The practice set built Linear and Logistic Regression models and evaluated them using Scikit-Learn.
