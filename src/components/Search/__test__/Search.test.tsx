import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../Search";

const handleChangeMock = jest.fn(
  (event: React.ChangeEvent<HTMLInputElement>) => {}
);

const mockProps: SearchProps = {
  results: [
    {
      id: "1",
      title: "Podcast 1",
      srcImg: "https://podcast.com/image/thumb/Podcast1.png",
      heightImg: "170",
      author: "Podcast 1",
      description: "Description of podcast 1",
    },
    {
      id: "2",
      title: "Podcast 2",
      srcImg: "https://podcast.com/image/thumb/Podcast2.png",
      heightImg: "170",
      author: "Podcast 2",
      description: "Description of podcast 2",
    },
    {
      id: "3",
      title: "Podcast 3",
      srcImg: "https://podcast.com/image/thumb/Podcast3.png",
      heightImg: "170",
      author: "Podcast 3",
      description: "Description of podcast 3",
    },
  ],
  searchText: "",
  handleChange: handleChangeMock,
};

describe("Search", () => {
  it("should renders the correct number of filtered podcasts", () => {
    render(<Search {...mockProps} />);
    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement.textContent).toEqual("3");
  });

  it("should calls the handleChange function when the input value changes", async () => {
    render(<Search {...mockProps} />);
    const inputElement = screen.getByPlaceholderText(
      /filter podcasts.../i
    ) as HTMLInputElement;
    const newValue = "new value";
    fireEvent.change(inputElement, { target: { value: newValue } });
    inputElement.value = newValue;
    expect(handleChangeMock).toHaveBeenCalledWith(expect.any(Object));
    expect(handleChangeMock.mock.calls[0][0].target.value).toBe(newValue);
  });

  it("should updates the input value when the searchText prop changes", () => {
    const newProps: SearchProps = { ...mockProps, searchText: "new value" };
    render(<Search {...newProps} />);
    const inputElement = screen.getByPlaceholderText(
      /filter podcasts.../i
    ) as HTMLInputElement;
    expect(inputElement.value).toBe("new value");
  });
});
