# Module 3: AI Applied to Data — Level 05
## Language: EN · Difficulty: Root
## Estimated time: 3 hours

## 🎯 Level objective
- Understand what a formula is and why the spreadsheet "does the work" for us.
- Write the basic formulas for addition, subtraction, multiplication and division.
- Use the SUM function to total an entire column with one click.
- Learn about auto-fill, to repeat calculations without typing by hand.
- Stop using the calculator for data that is already in the table.

## 📖 Essential vocabulary
| Term | Simple explanation |
|---|---|
| Formula | An instruction we give the sheet so that it calculates. It always starts with =. |
| Function | A ready-made formula, like SUM or AVERAGE, that does a complete calculation. |
| Cell reference | The address of a cell (like B3) used inside a formula. |
| Range | A group of consecutive cells, like B2:B8, going from B2 to B8. |
| Auto-fill | Dragging a cell with a formula downwards to copy it to the others. |

## 📚 Main lesson
Remember the grandmother in our story, who added up the month's expenses with a pencil and a calculator? Well, today you will discover that the spreadsheet does that work for us. In level 3 we used it like a notebook: we typed data. Today we will teach it to calculate. A formula is an instruction we give the sheet so that it performs an operation. It always starts with the equals sign (=). If you type "=2+2" in a cell and press Enter, the sheet shows 4. It is not magic, it is a formula.

Why is it so powerful? Because the formula does not keep the result; it keeps the recipe. If later you change the number 2 to a 5, the sheet recalculates by itself and shows 7. It is as if the stew recipe still worked even if we change the vegetables. You cannot do that on paper: on paper, if a piece of data changes, you have to redo the whole sum. In a spreadsheet, the result updates by itself.

The four basic operations are written like this: addition with the plus sign (+), subtraction with the minus (-), multiplication with the asterisk (*) and division with the slash (/). Careful: multiplication is not written with an "x" or a dot, but with the asterisk. "=6*7" gives 42. Division is not with a colon either: "=42/6" gives 7. These are small gestures, but worth knowing, like knowing where the drawers are in the kitchen.

Now comes the important jump: instead of numbers, we will use cell references. Instead of writing "=2+3", we write "=B2+C2", where B2 and C2 are the cells containing the 2 and the 3. What do we gain? If the value of B2 changes, the sum updates by itself. The formula looks at the box, not the contents; if the contents change, the calculation renews itself. That is how you work with real data.

The most used function in the world is SUM. To add up the price column of your table, you do not have to write "=B2+B3+B4..." forever. You write "=SUM(B2:B8)" and the sheet adds all the numbers between B2 and B8. The colon (:) means "from ... to": B2:B8 is "from B2 to B8". A range. It is like telling the sheet: "add up this batch of numbers, from this one to that one".

Writing a formula is easy if you follow three steps. First, click on the cell where you want the result. Second, type the equals sign. Third, type the formula or click on the cells you want to use. In fact, you can click on B2, type +, click on C2 and press Enter: the sheet fills in the references for you. It is like dictating a recipe while pointing at the ingredients.

The AVERAGE function calculates the mean: it adds all the numbers and divides them by how many there are. If you want to know the average spending per purchase, type "=AVERAGE(B2:B8)". Other useful functions: MIN and MAX (the smallest and largest values), COUNT (how many numbers there are) and ROUND. You do not need to learn them all by heart: the sheet suggests them as you type. It is enough to know what exists and what each one does.

Another wonderful trick: auto-fill. Imagine you have a "quantity" column and a "price" column, and you want to know how much each product costs (quantity × price). Write the formula in the first data row, for example "=C2*D2". Then click on the bottom-right corner of that cell: you will see a small square. Drag that square downwards, to the last row. The sheet copies the formula to all the rows, adjusting the references. Each row ends up with its own calculation, like an assembly line.

Why is this level so important in an AI module? Because formulas are the first step of "asking a machine to think with our data". The spreadsheet is not intelligent, but it carries out our orders with a speed and accuracy no human can match. AI will do similar things, but much more complex: finding patterns, predicting, classifying. If you understand how to ask a spreadsheet for a calculation, you will understand better how to ask an AI for an analysis.

Beware of a classic mistake: starting the formula without the equals sign. If you type "SUM(B2:B8)" without the =, the sheet treats it as text and calculates nothing. The equals sign is the key that opens the door of calculation. Another mistake: copying a formula by hand. Always use auto-fill or copy and paste; that way the references adjust properly. Typing the same formulas one by one is a waste of time and a risk of mistakes.

Today, with SUM, multiplications and auto-fill, your expenses table becomes a small calculation centre. In level 6 we will make the next leap: pivot tables, which summarise an entire table by categories with one click. For now, celebrate what you already know: you have taught the spreadsheet to calculate.

## 💡 Practical examples
### Example 1: Total of the shopping
In your expenses table, type in the cell below the prices "=SUM(D2:D7)" and press Enter. The sheet adds up the whole column: your total shopping for the week, without a calculator.

### Example 2: Price per quantity
If you have "quantity" and "price per unit", write in a new column "=C2*D2" and drag downwards. Each row shows how much that product costs.

### Example 3: Average spending per purchase
Type "=AVERAGE(D2:D7)". The sheet calculates the average spending per purchase. Check that the figure sounds reasonable for your week.

## 🛠️ Guided activity
Step 1. Open the "My week's expenses" sheet in Google Sheets.
Step 2. Make sure column D (price) has at least 5 numbers, from D2 to D6.
Step 3. Click on cell D8 (an empty row below the prices).
Step 4. Type: =SUM(D2:D6) and press Enter. You will see the week's total.
Step 5. Type in E1 the header "total per product".
Step 6. In E2 type: =C2*D2 and press Enter. The cost of the first product appears.
Step 7. Click again on E2 and move the mouse to the bottom-right corner until you see the small square.
Step 8. Drag the square downwards to E6 and release. All the rows are now calculated.
Step 9. Change the price of D2 to another number. Watch the total and the "total per product" change by themselves.
Step 10. Type in E8: =AVERAGE(D2:D6) and press Enter. Now you know your average spending per purchase.

## ✍️ Self-assessment exercises
1. Which sign must every formula start with?
2. How do you write multiplication in a spreadsheet?
3. What does "B2:B8" mean?
4. What does the SUM function do?
5. What is auto-fill and what is it for?

Answers: 1. The equals sign (=). 2. With the asterisk (*); for example =6*7. 3. A range: all the cells from B2 to B8. 4. It adds up all the numbers in a range, like =SUM(B2:B8). 5. Dragging the corner of a cell with a formula downwards to copy it to the others, adjusting each row's references.

## ⚖️ Ethical dimension
Formulas calculate without judging: they do exactly what they are asked to do. That is why you have to ask well. A common mistake is calculating on dirty data: if a row has a wrongly written price, the total comes out wrong even though the formula is perfect. Always review your data before calculating. And when someone presents you with a figure calculated with a spreadsheet or an AI, ask yourself what was inside the data: a misleading average is worse than having no average at all.

## 🔓 Open tools
| Tool | What it is and what it is for | Where to find it |
|---|---|---|
| Google Sheets | Spreadsheet with formulas, functions and auto-fill | https://sheets.google.com |
| LibreOffice Calc | The same, installed on the computer and offline | https://www.libreoffice.org |
| Google formula guide | Official list of all the functions in Sheets | https://support.google.com/docs/table/25273 |
| Khan Academy (spreadsheets) | Free video courses on spreadsheets | https://www.khanacademy.org |

## 🧠 Summary and bridge
- Formulas start with = and keep the recipe, not just the result.
- SUM, AVERAGE, MIN and MAX are the most useful functions.
- Cell references make the calculation update by itself.
- Auto-fill copies a formula to a whole column.
In the next level we will learn pivot tables: summarising an entire table by category with one click, without writing formulas.
