defmodule PhxChannelWeb.PageController do
  use PhxChannelWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  @spec create(Plug.Conn.t(), any) :: Plug.Conn.t()
  def create(conn, %{"message" => message}) do
    PhxChannelWeb.Endpoint.broadcast!("room:device", "new_msg", %{message: message})

    conn
    |> put_flash(:info, "Your message was successfully sent")
    |> render("index.html")
  end
end
