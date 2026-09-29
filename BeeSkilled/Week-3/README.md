# Week 3 – Machine Learning Introduction

**BeeSkilled – Data Science Internship**

**Author:** Priya Dharshini R  
**Course:** B.Tech Artificial Intelligence and Data Science

## Overview

Week 3 introduced machine learning using Scikit-Learn. The main project focused on building a regression model to predict student performance. The practice set covered exploratory data analysis (EDA), including outlier detection, feature selection, and correlation analysis using the same dataset.

## Dataset

**File:** `Student_Performance.csv`  
**Size:** 10,000 rows, 6 columns  
**Missing Values:** None

| Column | Description |
|--------|-------------|
| Hours Studied | Hours the student studied |
| Previous Scores | Scores from previous exams |
| Extracurricular Activities | Yes / No |
| Sleep Hours | Average hours of sleep |
| Sample Question Papers Practiced | Number of practice papers solved |
| Performance Index | Target variable representing student performance |

## Project: Predict Student Performance

**Objective:** Build a regression model using Scikit-Learn to predict student performance.

### Steps

1. Loaded the dataset and inspected its shape, columns, and data types using `info()` and `describe()`.
2. Selected the input features: Hours Studied, Previous Scores, Sleep Hours, and Sample Question Papers Practiced.
3. Set Performance Index as the target variable.
4. Split the data into 80% training data (8,000 rows) and 20% testing data (2,000 rows) using `random_state=42`.
5. Trained a **Linear Regression** model.
6. Predicted performance on the test set and compared actual and predicted values.
7. Evaluated the model using R² Score and Mean Absolute Error (MAE).
8. Visualized actual vs predicted values and examined the model coefficients.

### Results

| Metric | Value |
|--------|-------|
| R² Score | ≈ 0.989 |
| Mean Absolute Error | ≈ 1.63 |

### Model Coefficients

| Feature | Coefficient |
|---------|-------------|
| Hours Studied | ≈ 2.85 |
| Previous Scores | ≈ 1.02 |
| Sleep Hours | ≈ 0.47 |
| Sample Question Papers Practiced | ≈ 0.19 |

Among the selected features, Hours Studied had the largest regression coefficient, followed by Previous Scores, Sleep Hours, and Sample Question Papers Practiced.

## Practice Set

**Notebook:** `Week3_Practice.ipynb`

The practice set focused on outlier detection, correlation analysis, and feature selection.

### 1. Dataset Overview

- Checked the dataset shape: 10,000 × 6
- Checked column names
- Checked for missing values
- No missing values were found

### 2. Outlier Detection

- Used the **IQR (Interquartile Range)** method
- Calculated lower and upper bounds using:
  - Lower Bound = Q1 − 1.5 × IQR
  - Upper Bound = Q3 + 1.5 × IQR
- Used boxplots to visualize potential outliers
- No outliers were found in the numerical columns

### 3. Feature Selection

The `Extracurricular Activities` column was dropped, keeping only the numerical columns for further analysis.

### 4. Correlation Analysis

Calculated correlations between Performance Index and the input features and visualized them using a correlation heatmap.

Among the input features:

- Previous Scores showed the strongest correlation with Performance Index (≈ 0.92)
- Hours Studied showed a moderate correlation (≈ 0.37)
- Sleep Hours showed a weak correlation (≈ 0.05)
- Sample Question Papers Practiced showed a weak correlation (≈ 0.04)

## Tools and Libraries

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Scikit-Learn
- Jupyter Notebook
- Google Colab

## How to Run

1. Install the required libraries:

```bash
pip install pandas numpy matplotlib seaborn scikit-learn jupyter
```

2. Open `Week_3_Beeskilled.ipynb` or `Week3_Practice.ipynb` in Jupyter Notebook, JupyterLab, or Google Colab.

**Note:** The notebooks were written in Google Colab and load the data from `/content/sample_data/Student_Performance.csv`. To run them locally, change the path in `pd.read_csv(...)` to `Student_Performance.csv`, or to wherever the file is saved.

## Skills Demonstrated

- Exploratory data analysis
- Outlier detection using the IQR method
- Correlation analysis and feature selection
- Train-test splitting
- Building a Linear Regression model with Scikit-Learn
- Model evaluation using R² and MAE
- Data visualization with Matplotlib and Seaborn

## Conclusion

In this week, a Linear Regression model was trained to predict student performance from study habits and past scores, and it performed strongly on the test set (R² ≈ 0.989, MAE ≈ 1.63). The practice set built the EDA skills that come before modelling: checking data quality, detecting outliers, and understanding feature relationships.
