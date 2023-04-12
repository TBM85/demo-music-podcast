import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../Search";

const handleChangeMock = jest.fn(
  (event: React.ChangeEvent<HTMLInputElement>) => {}
);

const mockProps: SearchProps = {
  results: [],
  searchText: "",
  handleChange: handleChangeMock,
};

describe("Search", () => {
  it("should calls the handleChange function when the input value changes", async () => {
    render(<Search {...mockProps} />);
    const inputElement = screen.getByPlaceholderText(
      "Filter podcasts..."
    ) as HTMLInputElement;
    const newValue = "new value";
    fireEvent.change(inputElement, { target: { value: newValue } });
    inputElement.value = newValue;
    expect(handleChangeMock).toHaveBeenCalledWith(expect.any(Object));
    expect(handleChangeMock.mock.calls[0][0].target.value).toBe(newValue);
  });
});
