# Week 2 – Data Visualization

**BeeSkilled – Data Science Internship**

**Author:** Priya Dharshini R  
**Course:** B.Tech Artificial Intelligence and Data Science

## Overview

Week 2 focused on data visualization in Python. The work has two parts: a project analyzing the global COVID-19 dataset, and a practice set covering the main chart types using Matplotlib, Seaborn, and Plotly.

## Folder Structure

```text
week 2/
├── week2/
│   ├── Week_2_Beskilled.ipynb      # Project: EDA on COVID-19 dataset
│   └── Week_2_practice.ipynb       # Practice set solutions
├── week-2.pdf                      # Project brief
└── practice set.pdf                # Practice questions
```

## Project – Exploratory Data Analysis on COVID-19 Dataset

**Objective:** Practice data visualization using Matplotlib and Seaborn.

**Dataset:** Global COVID-19 data from Our World in Data (about 617,000 rows and 61 columns), loaded directly from an online URL.

**Tasks completed**

* Loaded the dataset and inspected its shape and column names
* Selected key columns: `country`, `date`, `total_cases`, `total_deaths`, `total_vaccinations`
* Plotted the trend of total cases over time for India using a line chart
* Identified and compared the top 5 countries by total cases using a bar chart
* Created a heatmap of total cases and total deaths for the top 5 countries
* Created a scatter plot of total cases vs. total deaths

## Practice Set

**Topics:** Matplotlib, Seaborn, Plotly

1. Bar chart and pie chart using sample data
2. Histogram of the age distribution of students
3. Correlation heatmap of study hours, attendance, and marks
4. Multiple line graphs comparing monthly sales and profit

## Tools and Technologies

* Python
* Jupyter Notebook / Google Colab
* Pandas
* Matplotlib
* Seaborn
* Plotly

## How to Run

1. Install the required libraries:

```bash
pip install pandas matplotlib seaborn plotly jupyter
```

2. Open `Week_2_Beskilled.ipynb` or `Week_2_practice.ipynb` in Jupyter Notebook, JupyterLab, or Google Colab.

**Note:** The project notebook loads the COVID-19 data from an online source, so an internet connection is required.

## Skills Demonstrated

* Data loading and inspection with Pandas
* Line charts, bar charts, pie charts, histograms, heatmaps, and scatter plots
* Comparing data across countries
* Correlation analysis
* Interpreting visualizations

## Conclusion

In Week 2, I used Matplotlib, Seaborn, and Plotly to turn raw data into clear visualizations. The COVID-19 project showed how case trends, country comparisons, and the relationship between cases and deaths can be explored visually, and the practice set covered the main chart types used in exploratory data analysis.
