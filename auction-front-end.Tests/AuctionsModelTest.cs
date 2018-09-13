using Microsoft.VisualStudio.TestTools.UnitTesting;
using auction_front_end.Pages;

namespace auction_front_end.Tests
{
    [TestClass]
    public class AuctionsModelTest
    {
        [TestMethod]
        public void OnGet_Returns_Message()
        {
            // Arrange
            var sut = new AuctionsModel();

            // Act
            sut.OnGet();

            // Assert
            StringAssert.Contains(sut.Message, "auctions");
        }
    }
}
