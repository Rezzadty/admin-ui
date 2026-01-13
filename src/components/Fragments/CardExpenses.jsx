import React from "react";
import Icon from "../Elements/Icon";

const iconMap = {
  housing: Icon.House,
  food: Icon.Food,
  transportation: Icon.Transport,
  entertainment: Icon.Movie,
  shopping: Icon.Shopping,
  others: Icon.Other,
};

const categoryLabels = {
  housing: "Housing",
  food: "Food",
  transportation: "Transportation",
  entertainment: "Entertainment",
  shopping: "Shopping",
  others: "Others",
};

function CardExpenseCategory({ category, amount, percentage, trend, detail }) {
  const CategoryIcon = iconMap[category] || Icon.Other;
  const isUp = trend === "up";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between p-4 bg-gray-50">
        <div className="flex items-center gap-3">
          <div className="p-3 text-gray-02 bg-gray-100 rounded-lg">
            <CategoryIcon size={24} />
          </div>
          <div>
            <div className="text-gray-02 text-sm font-bold ">{categoryLabels[category] || category}</div>
            <div className="text-2xl font-bold text-black">${amount}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-1">
            <span className="text-sm font-bold text-gray-02">{percentage}%</span>
            <span className={isUp ? "text-red-500" : "text-green-500"}>
              {isUp ? <Icon.ArrowUp size={16} /> : <Icon.ArrowDown size={16} />}
            </span>
          </div>
          <div className="text-xs text-gray-02  mt-1">Compare to the last month</div>
        </div>
      </div>

      {/* Items */}
      <div className="p-4">
        {(detail || []).map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center py-3 ${
              index !== detail.length - 1 ? "border-b-2 border-gray-05" : ""
            }`}
          >
            <div className="text-gray-02 font-bold">{item.item}</div>
            <div className="text-right">
              <div className="font-bold text-gray-03">${item.amount}</div>
              <div className="text-xs text-gray-03">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardExpenseCategory;