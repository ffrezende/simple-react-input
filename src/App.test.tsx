import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./common/useCases/useLoadWordDefinition", () => ({
  useLoadWordDefinition: () => ({
    data: [],
    loading: false,
    error: false,
    loadWordDefinition: jest.fn(),
  }),
}));

describe("Aplication entry file tests", () => {
  it("App is rendering", () => {
    render(<App />);
    screen.getAllByTestId("app-container");
    expect(screen.getAllByTestId("app-container")).toBeInTheDocument();
  });
});
