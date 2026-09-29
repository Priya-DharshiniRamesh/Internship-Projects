# Week 1 – Python for Data Science Basics

**BeeSkilled – Data Science Internship**

**Author:** Priya Dharshini R  
**Project:** Analyze Student Marks Dataset

## Objective

Learn Pandas and NumPy fundamentals and basic data cleaning by analyzing a student marks dataset.

## Folder Contents

```text
week1/
├── Week1_Beskilled.ipynb       # Project notebook
├── StudentsPerformance.csv     # Dataset
└── week-1.pdf                  # Task brief
```

## Dataset

`StudentsPerformance.csv` contains 1,000 records and 8 columns:

* gender
* race/ethnicity
* parental level of education
* lunch
* test preparation course
* math score
* reading score
* writing score

## Tasks Completed

* Loaded the dataset using Pandas
* Inspected the dataset shape, column names, and data types
* Checked for missing values and applied `dropna()` (no rows needed to be removed)
* Calculated the average, maximum, and minimum of the math, reading, and writing scores
* Displayed the results in a summary table using Pandas

## Results

| Subject | Average | Maximum | Minimum |
| ------- | ------- | ------- | ------- |
| Math    | 66.09   | 100     | 0       |
| Reading | 69.17   | 100     | 17      |
| Writing | 68.05   | 100     | 10      |

The dataset had no missing values.

## Tools and Technologies

* Python
* Pandas
* NumPy
* Jupyter Notebook / Google Colab

## How to Run

1. Install the required libraries:

```bash
pip install pandas numpy jupyter
```

2. Open `Week1_Beskilled.ipynb` in Jupyter Notebook, JupyterLab, or Google Colab.

**Note:** The notebook was written in Google Colab and reads the dataset from `/content/sample_data/StudentsPerformance.csv`. To run it locally, change the path in `pd.read_csv(...)` to `StudentsPerformance.csv`.

## Conclusion

The Student Marks dataset was analyzed using Python, Pandas, and NumPy. The data was checked for missing values, and the average, maximum, and minimum scores for Mathematics, Reading, and Writing were calculated.
