import { render } from "@testing-library/vue"
import Button from "../src/button"

// Test button 渲染是否正常
test("should work", () => {
  const { getByRole } = render(Button)
  getByRole("button")
})

// Test slots
test("default slots should work", () => {
  const { getByText } = render(Button)
  getByText("按钮")
})

test("slots should work", () => {
  const { getByText } = render(Button, {
    slots: {
      default() {
        return "confirm"
      }
    }
  })
  getByText("confirm")
})

// Test props
test("props type should work", () => {
  const { getByRole } = render(Button, {
    props: {
      type: "primary"
    }
  })
  const button = getByRole("button")
  expect(button.classList.contains("u-button--primary")).toBe(true)
})
